import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Typography } from "antd";
import Icon from '@ant-design/icons';
import { ReactComponent as LogoSvg } from '../../../Logos/SagaBlack2Svg.svg';
import "./landing.css";

const { Title } = Typography;

function LandingPage(): React.ReactElement {
  const navigate = useNavigate();

  function NavigateToRoute(path: string) {
    navigate(path);
  }

  return (
    <React.Fragment>
      <Typography className="App-header">
        <Icon component={LogoSvg} style={{ fontSize: '350px' }} />
        <Title>
        </Title>
      </Typography>
      <Button className="buttons" type="primary"  size="large" onClick={() => NavigateToRoute("signin")} > Sign In </Button>
      <Button className="buttons" type="primary"  size="large" onClick={() => NavigateToRoute("instructorsignup")}> Instructor Sign Up </Button>
      <Button className="buttons" type="primary"  size="large" onClick={() => NavigateToRoute("about")}> About Saga </Button>
    </React.Fragment>
  )
}

export default LandingPage;