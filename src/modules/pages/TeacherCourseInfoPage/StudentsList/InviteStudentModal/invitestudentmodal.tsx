import React from "react";
import { Modal, Form, Input, Button, Select, Typography } from "antd";
import { InviteStudentModalProps } from "./types";
import "./invitestudentmodal.css";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const { Title, Text } = Typography

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function InviteStudentModal (props: InviteStudentModalProps): React.ReactElement {
  const { user, ...rest } = props;

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Modal footer={null} className="invite-student-modal" {...rest}>
      <Title level={3} style={{textAlign: 'center'}}> Invite a New Adventurer! </Title>
      <Form {...layout} name="invite-student-form" onFinish={onFinish} validateMessages={validateMessages} className="edit-character-form">
        <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Send Invitation
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default InviteStudentModal;