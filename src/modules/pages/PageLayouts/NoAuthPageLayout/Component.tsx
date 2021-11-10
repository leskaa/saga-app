import React from "react";
import { Layout } from "antd";
import { PageLayoutProps } from "../types";
import "./noauthpagelayout.css";
import MovingBooksContainer from "./MovingBooksContainer";

const { Content } = Layout;
function NoAuthPageLayout(props: PageLayoutProps): React.ReactElement {
  const { children } = props;

  return (
    <Layout>
      <Content className="no-auth-layout">
        {children}
      </Content>
    </Layout>
  )
}

export default NoAuthPageLayout;