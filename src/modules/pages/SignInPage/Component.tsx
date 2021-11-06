import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { NavigateToRoute } from "../../root/utils";


function SignInPage(): React.ReactElement {
    const navigate = useNavigate();

    function NavigateToRoute(path: string) {
        navigate(path);
    }

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
                    <Form.Item>
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </header>
        </React.Fragment>
    );
};

export default SignInPage;

//ReactDOM.render(<FormLayoutDemo />, mountNode);