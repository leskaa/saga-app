import React, { useContext } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { SupportModalProps } from './types';
import { GlobalContext } from '../../../../root/GlobalStore';
import './supportmodal.css';
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

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function SupportModal(props: SupportModalProps): React.ReactElement {
  const { ...rest } = props;
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser;

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Modal footer={null} className="support-modal" {...rest}>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="support-form"
      >
        <Form.Item name={['user', 'name']} label="Name">
          <Input disabled defaultValue={user?.name} />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email">
          <Input disabled defaultValue={user?.email} />
        </Form.Item>
        <Form.Item
          name={['user', 'subject']}
          label="Issue Subject"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'description']}
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default SupportModal;
