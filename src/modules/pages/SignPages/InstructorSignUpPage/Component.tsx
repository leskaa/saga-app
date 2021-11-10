import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Select, Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as LogoSvg } from '../../../../Logos/SagaBlackSvg.svg';
import '../signin.css';
import MovingBooksContainer from '../../PageLayouts/NoAuthPageLayout/MovingBooksContainer';

function InstructorSignInPage(): React.ReactElement {
  const navigate = useNavigate();

  function NavigateToRoute(path: string) {
    navigate(path);
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
    NavigateToRoute('/confirmation');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();

  return (
    <MovingBooksContainer>
      <>
        <Row>
          <Col span={7} />
          <Col span={10} className="center-container">
            <LogoSvg
              style={{
                width: '20em',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                height: '29%',
              }}
            />
            <Form
              form={form}
              layout="vertical"
              requiredMark
              initialValues={{ pronouns: '' }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Row>
                <Col span={12}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your first name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your last name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="Pronouns" name="pronouns">
                <Select>
                  <Select.Option value="">None</Select.Option>
                  <Select.Option value="They/Them">They/Them</Select.Option>
                  <Select.Option value="She/Her">She/Her</Select.Option>
                  <Select.Option value="He/Him">He/Him</Select.Option>
                  <Select.Option value="Ze/Zir">Ze/Zir</Select.Option>
                  <Select.Option value="Name">Name</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                  { type: 'string', min: 8 },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'The two passwords that you entered do not match!'
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button className="buttons" type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={7} />
        </Row>
      </>
    </MovingBooksContainer>
  );
}

export default InstructorSignInPage;
