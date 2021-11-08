import React from "react";
import { Layout } from "antd";
import { PageLayoutProps } from "../types";

function NoAuthPageLayout(props: PageLayoutProps): React.ReactElement {
  const { children } = props;

  return (
    <Layout>
      {children}
    </Layout>
  )
}

export default NoAuthPageLayout;