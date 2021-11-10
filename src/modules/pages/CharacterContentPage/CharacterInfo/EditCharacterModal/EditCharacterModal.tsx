import React from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';
import { EditCharacterModalProps } from './types';
import './editcharactermodal.css';

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

function EditCharacterModal(
  props: EditCharacterModalProps
): React.ReactElement {
  const { user, ...rest } = props;

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Modal footer={null} className="edit-character-modal" {...rest}>
      <Form
        {...layout}
        name="ed-character-form"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="edit-character-form"
      >
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input disabled defaultValue={user?.name} />
        </Form.Item>
        <Form.Item label="Pronouns" name="pronouns">
          <Select defaultValue={user.pronouns ?? ''}>
            <Select.Option value="">None</Select.Option>
            <Select.Option value="They/Them">They/Them</Select.Option>
            <Select.Option value="She/Her">She/Her</Select.Option>
            <Select.Option value="He/Him">He/Him</Select.Option>
            <Select.Option value="Ze/Zir">Ze/Zir</Select.Option>
            <Select.Option value="Name">Name</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input disabled defaultValue={user?.email} />
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

export default EditCharacterModal;
