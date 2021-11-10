import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as LogoSvg } from '../../../../Logos/SagaBlack2Svg.svg';
import '../signin.css';
import MovingBooksContainer from '../../PageLayouts/NoAuthPageLayout/MovingBooksContainer';
import { GlobalContext } from '../../../root/GlobalStore';

function SignInPage(): React.ReactElement {
  const navigate = useNavigate();
  const { dispatch } = useContext(GlobalContext);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    fetch('https://saga-learn.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        rememberMe: values.remember,
      }),
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          message.error('Incorrect email or password.', 10);
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((user) => {
        dispatch({ type: 'AUTHENTICATE_USER', payload: true });
        dispatch({ type: 'SET_USER', payload: user });
        navigate('/myadventures');
      })
      .catch((err) => console.error(err));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <MovingBooksContainer>
      <>
        <Row>
          <Col span={8} />
          <Col span={8} className="center-container">
            <Icon component={LogoSvg} style={{ fontSize: '350px' }} />
            <Form
              form={form}
              layout="vertical"
              requiredMark={false}
              initialValues={{ pronouns: '' }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Checkbox name="remember">Remember Me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  className="buttons"
                  type="primary"
                  size="large"
                  htmlType="submit"
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={8} />
        </Row>
      </>
    </MovingBooksContainer>
  );
}

export default SignInPage;
