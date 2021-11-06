import React from "react";
import SideNav from "./SideNav";
import { Layout } from "antd";
import { PageLayoutProps } from "./types";

const { Content } = Layout;

function PageLayout(props: PageLayoutProps) {
  const { children } = props;

  return (
    <Layout style={{minHeight: '100vh'}}>
      <SideNav/>
      <Layout className="container-layout">
        <Content style={{height: '100vh'}} >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default PageLayout;