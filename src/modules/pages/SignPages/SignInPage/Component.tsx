import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as LogoSvg } from '../../../../Logos/SagaBlack2Svg.svg';
import '../signin.css';
import MovingBooksContainer from '../../PageLayouts/NoAuthPageLayout/MovingBooksContainer';
import { GlobalContext } from '../../../root/GlobalStore';

function SignInPage(): React.ReactElement {
  const navigate = useNavigate();
  const { dispatch } = useContext(GlobalContext);

  function NavigateToRoute(path: string) {
    navigate(path);
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
    // fetch('https://saga-learn.herokuapp.com/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: values.email,
    //     password: values.password,
    //     rememberMe: values.remember,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     dispatch({type: 'SET_USER', payload: data});
    //     NavigateToRoute('/mycourses');
    //   });
    NavigateToRoute('/mycourses');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();

  return (
    <MovingBooksContainer>
      <>
        <Row>
          <Col span={8} />
          <Col span={8} className="center-container">
            <LogoSvg
              style={{
                width: '25em',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                height: '60%',
              }}
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
