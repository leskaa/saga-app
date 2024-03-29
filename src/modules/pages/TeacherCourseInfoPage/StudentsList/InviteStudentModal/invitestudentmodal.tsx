import React from 'react';
import { Modal, Form, Input, Button, Typography, message } from 'antd';
import { InviteStudentModalProps } from './types';
import { apiEndpoint } from '../../../../root/constants';
import './invitestudentmodal.css';

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

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function InviteStudentModal(
  props: InviteStudentModalProps
): React.ReactElement {
  const { user, courseId, ...rest } = props;

  const onFinish = (values: any) => {
    fetch(`${apiEndpoint}/inviteStudent/${courseId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emails: [values.email],
      }),
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          message.error('Something went wrong.', 10);
          throw Error(res.statusText);
        }
        message.info('Invite sent!');
        props.setVisible(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Modal footer={null} className="invite-student-modal" {...rest}>
      <Title className="title" level={3} style={{ textAlign: 'center' }}>
        {' '}
        Invite a New Adventurer!{' '}
      </Title>
      <Form
        {...layout}
        name="invite-student-form"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="edit-character-form"
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Send Invitation
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default InviteStudentModal;
