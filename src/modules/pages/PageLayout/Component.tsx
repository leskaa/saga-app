import React from "react";
import SideNav from "./SideNav";
import { Layout } from "antd";

const {Header, Content, Footer} = Layout;

function PageLayout() {

  return (
    <Layout style={{minHeight: "100vh"}}>
      <SideNav/>
      <Layout className="container-layout">
        <Content>

        </Content>
        <Footer style={{textAlign: "center"}}> SAGA ©2021 Created for Liquid Hacks 2.0 </Footer>
      </Layout>


    </Layout>
  )
}

export default PageLayout;