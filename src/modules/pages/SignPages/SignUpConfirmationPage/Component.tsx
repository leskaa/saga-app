import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Result, Row, Col } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import '../signin.css';
import MovingBooksContainer from '../../PageLayouts/NoAuthPageLayout/MovingBooksContainer';

function SignUpConfirmationPage(): React.ReactElement {
  const navigate = useNavigate();

  function NavigateToRoute(path: string) {
    navigate(path);
  }
  const [form] = Form.useForm();

  return (
    <MovingBooksContainer>
      <>
        <Row style={{ height: '30%' }} />
        <Row style={{ height: '40%' }}>
          <Col span={7} />
          <Col span={10} className="center-container">
            <Result
              icon={<SmileOutlined />}
              title="Great, we have created your account!"
              extra={
                <Button
                  className="buttons"
                  type="primary"
                  size="large"
                  onClick={() => NavigateToRoute('/signin')}
                >
                  Log In
                </Button>
              }
            />
          </Col>
          <Col span={7} />
        </Row>
        <Row style={{ height: '30%' }} />
      </>
    </MovingBooksContainer>
  );
}

export default SignUpConfirmationPage;
