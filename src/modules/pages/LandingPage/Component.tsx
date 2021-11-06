


import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import { NavigateToRoute } from "../../root/utils";

function LandingPage(): React.ReactElement {
  const navigate = useNavigate();

  function NavigateToRoute(path: string) {
    navigate(path);
  }

  return (
    <React.Fragment>

      <header className="App-header">
        <h1>
          Enter Your Saga
        </h1>
        <Button type="primary" onClick={() => NavigateToRoute("signin")}> Sign In </Button>
        <Button type="primary"> Sign Up </Button>
        <Button type="primary" onClick={() => NavigateToRoute("about")}> About Saga </Button>
      </header>




    </React.Fragment>


  )

}

export default LandingPage;