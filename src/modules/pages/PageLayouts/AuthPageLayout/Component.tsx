import React, { useState, useCallback } from "react";
import SideNav from "./SideNav";
import SupportModal from "./SupportModal";
import { Layout } from "antd";
import { PageLayoutProps } from "../types";

const { Content } = Layout;

function AuthPageLayout(props: PageLayoutProps) {
  const { children } = props;
  const [isSupportModalVisible, setIsSupportModalVisible] = useState(false);

  const handleShowSupportModal = useCallback(() => {
    setIsSupportModalVisible(true);
  }, [isSupportModalVisible]);

  const handleHideSupportModal = useCallback(() => {
    setIsSupportModalVisible(false);
  }, [isSupportModalVisible]);

  return (
    <Layout style={{minHeight: '100vh'}}>
      <SideNav onRequestSupportClick={handleShowSupportModal}/>
      <Layout className="container-layout">
        <Content style={{height: '100vh'}} >
          {children}
          { isSupportModalVisible && <SupportModal visible={isSupportModalVisible} onOk={handleHideSupportModal} onCancel={handleHideSupportModal}/> }
        </Content>
      </Layout>
    </Layout>
  )
}

export default AuthPageLayout;