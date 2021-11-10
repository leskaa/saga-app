import React from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as LogoSvg } from '../../../../Logos/SagaBlack2Svg.svg';
import "../signin.css";
import MovingBooksContainer from "../../PageLayouts/NoAuthPageLayout/MovingBooksContainer";


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
        <MovingBooksContainer>
            <React.Fragment>
                <Row>
                    <Col span = {8} />
                    <Col span = {8} className='center-container'>
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
                                <Input placeholder="Email"/>
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
                    </Col>
                    <Col span = {8} />
                </Row>
            </React.Fragment>
        </MovingBooksContainer>
    );
};

export default SignInPage;
