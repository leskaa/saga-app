import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd';
import { convertResponseDataToUser } from '../../../general/utils';
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
      .then((response) => {
        dispatch({ type: 'AUTHENTICATE_USER', payload: true });
        dispatch({
          type: 'SET_USER',
          payload: convertResponseDataToUser(response.data),
        });
        navigate('/adventures');
      })
      .catch((err) => console.error(err));
  };

  const handleLogoClick = () => {
    navigate('/');
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
            <LogoSvg
              id="logo"
              style={{
                width: '25em',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                height: '60%',
              }}
              onClick={handleLogoClick}
            />
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
                <Button className="buttons" type="primary" htmlType="submit">
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
