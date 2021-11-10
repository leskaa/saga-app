import React, { useState, useCallback } from 'react';
import { Layout } from 'antd';
import SideNav from './SideNav';
import SupportModal from './SupportModal';
import { PageLayoutProps } from '../types';
import './authpagelayout.css';

const { Content } = Layout;

function AuthPageLayout(props: PageLayoutProps): React.ReactElement {
  const { children } = props;
  const [isSupportModalVisible, setIsSupportModalVisible] = useState(false);

  const handleShowSupportModal = useCallback(() => {
    setIsSupportModalVisible(true);
  }, []);

  const handleHideSupportModal = useCallback(() => {
    setIsSupportModalVisible(false);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideNav onRequestSupportClick={handleShowSupportModal} />
      <Layout className="container-layout">
        <Content className="auth-layout">
          {children}
          {isSupportModalVisible && (
            <SupportModal
              visible={isSupportModalVisible}
              onOk={handleHideSupportModal}
              onCancel={handleHideSupportModal}
            />
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default AuthPageLayout;
