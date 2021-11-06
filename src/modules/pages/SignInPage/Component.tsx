import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { NavigateToRoute } from "../../root/utils";


function SignInPage(): React.ReactElement {

    const [form] = Form.useForm();

    return (
        <React.Fragment>

            <header className="App-header">
                <h1>
                    Enter Your Saga
                </h1>
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
            </header>
        </React.Fragment>
    );
};

export default SignInPage;
