import React from 'react';
import { Form, Input, Button } from 'antd';


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
