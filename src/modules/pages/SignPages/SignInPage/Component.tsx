import React from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as LogoSvg } from '../../../../Logos/SagaBlack2Svg.svg';
import "../signin.css";

function SignInPage(): React.ReactElement {
    const navigate = useNavigate();

    function NavigateToRoute(path: string) {
        navigate(path);
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
        NavigateToRoute("/mycourses");
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const [form] = Form.useForm();

    return (
        <React.Fragment>
            <Icon component={LogoSvg} style={{ fontSize: '350px' }} />
                <Form
                    form={form}
                    layout="vertical"
                    requiredMark={false}
                    initialValues={{ pronouns:'' }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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
                        <Button className="buttons" type="primary" size="large" htmlType="submit">Sign In</Button>
                    </Form.Item>
                </Form>
        </React.Fragment>
    );
};

export default SignInPage;
