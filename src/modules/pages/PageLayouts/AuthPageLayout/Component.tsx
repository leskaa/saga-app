import React, { useState, useCallback } from "react";
import SideNav from "./SideNav";
import SupportModal from "./SupportModal";
import { Layout } from "antd";
import { PageLayoutProps } from "../types";
import "./authpagelayout.css";

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