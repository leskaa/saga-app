import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Button, Typography, Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as LogoSvg } from '../../../Logos/SagaBlack2Svg.svg';
import MovingBooksContainer from '../PageLayouts/NoAuthPageLayout/MovingBooksContainer';

const { Title } = Typography;

function LandingPage(): React.ReactElement {
  const navigate = useNavigate();

  function NavigateToRoute(path: string) {
    navigate(path);
  }

  return (
    <MovingBooksContainer>
      <Row>
        <Col span={9} />
        <Col span={6}>
          <Typography className="App-header">
            <LogoSvg
              style={{
                width: '25em',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <Title className="title" />
          </Typography>
          <Button
            className="buttons"
            type="primary"
            size="large"
            onClick={() => NavigateToRoute('signin')}
          >
            {' '}
            Sign In{' '}
          </Button>
          <Button
            className="buttons"
            type="primary"
            size="large"
            onClick={() => NavigateToRoute('instructorsignup')}
          >
            {' '}
            Instructor Sign Up{' '}
          </Button>
          <Button
            className="buttons"
            type="primary"
            size="large"
            onClick={() => NavigateToRoute('about')}
          >
            {' '}
            About Saga{' '}
          </Button>
        </Col>
        <Col span={9} />
      </Row>
    </MovingBooksContainer>
  );
}

export default LandingPage;
