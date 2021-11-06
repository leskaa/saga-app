import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Typography } from "antd";
import "./landing.css";

const { Title } = Typography;

function LandingPage(): React.ReactElement {
  const navigate = useNavigate();

  function NavigateToRoute(path: string) {
    navigate(path);
  }

  return (
      <Layout className="SignIn-Container">
        <Typography className="header">
          <Title>
            Enter Your Saga
          </Title>
        </Typography>
      <Button className="buttons" type="primary" shape="round" size="large" onClick={( )=> NavigateToRoute("signin")} > Sign In </Button>
      <Button className="buttons" type="primary" shape="round" size="large" onClick={( )=> NavigateToRoute("signup")}> Sign Up </Button>
      <Button className="buttons" type="primary" shape="round" size="large" onClick={( )=> NavigateToRoute("about")}> About Saga </Button>
      </Layout>
  )
}

export default LandingPage;