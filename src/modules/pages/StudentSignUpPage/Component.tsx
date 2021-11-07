import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Select } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { NavigateToRoute } from "../../root/utils";


function AddAssignmentPage(): React.ReactElement {
    const navigate = useNavigate();

    function NavigateToRoute(path: string) {
        navigate(path);
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const [form] = Form.useForm();

    return (
        <React.Fragment>

            <header className="App-header">
                <h1>
                    Enter Your Saga
                </h1>
                <Form form={form} layout="vertical" requiredMark={true}>
                    <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="lastName"
                        rules={[{ required: true, message: 'Please input your last name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Pronouns"
                        name="pronouns"
                    >
                        <Select defaultValue="">
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
                    >
                        <Input defaultValue="testemail@something.edu" disabled />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[{ required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </header>
        </React.Fragment>
    );
};

export default AddAssignmentPage;
