import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as LogoSvg } from '../../../../Logos/SagaWhite2Svg.svg';

function SignInPage(): React.ReactElement {

    const [form] = Form.useForm();

    return (
        <React.Fragment>
            <Icon component={LogoSvg} style={{ fontSize: '350px' }} />
                <Form
                    form={form}
                    layout="vertical"
                    requiredMark={false}
                >

                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please enter your email!' }]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Checkbox name="remember">Remember Me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Sign In</Button>
                    </Form.Item>
                </Form>
        </React.Fragment>
    );
};

export default SignInPage;
