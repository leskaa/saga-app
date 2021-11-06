import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Button } from "antd";
import "./landing.css";

function LandingPage(): React.ReactElement {
  const navigate = useNavigate();

  function NavigateToRoute(path: string) {
    navigate(path);
  }

  return (
      <div className="SignIn-Container">
        <h1 className="header">
          Enter Your Saga
        </h1>
      <Button className="buttons" type="primary" shape="round" size="large"onClick={( )=> NavigateToRoute("signin")} > Sign In </Button>
      <Button className="buttons" type="primary" shape="round" size="large" onClick={( )=> NavigateToRoute("signup")}> Sign Up </Button>
      <Button className="buttons" type="primary" shape="round" size="large" onClick={( )=> NavigateToRoute("about")}> About Saga </Button>
      </div>
  )

}

export default LandingPage;