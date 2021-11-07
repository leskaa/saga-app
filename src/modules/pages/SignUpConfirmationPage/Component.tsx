import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button, Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { NavigateToRoute } from "../../root/utils";


function SignUpConfirmationPage(): React.ReactElement {
    const navigate = useNavigate();

    function NavigateToRoute(path: string) {
        navigate(path);
    }
    const [form] = Form.useForm();

    return (
        <React.Fragment>

            <Result
                icon={<SmileOutlined />}
                title="Great, we have created your account!"
                extra={<Button type="primary" onClick={() => NavigateToRoute("/signin")}>Log In</Button>}
            />
        </React.Fragment>
    );
};

export default SignUpConfirmationPage;
