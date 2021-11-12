import React, { useContext } from 'react';
import { Modal, Form, Input, Button, Select, message } from 'antd';
import { EditCharacterModalProps } from './types';
import './editcharactermodal.css';
import { convertResponseDataToUser } from '../../../../general/utils';
import { GlobalContext } from '../../../../root/GlobalStore';

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
  const { user, setVisible, ...rest } = props;
  const { dispatch } = useContext(GlobalContext);

  const updateUser = (values: any) => {
    let { name } = values;
    let { pronouns } = values;

    if (!name) {
      name = user.name;
    }
    if (!pronouns) {
      pronouns = user.pronouns;
    }
    fetch('https://saga-learn.herokuapp.com/updateUser', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        pronouns,
      }),
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          message.error('Something went wrong.', 10);
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((response) => {
        dispatch({
          type: 'SET_USER',
          payload: convertResponseDataToUser(response),
        });
        console.log(response);
        setVisible(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Modal footer={null} className="edit-character-modal" {...rest}>
      <Form
        {...layout}
        name="ed-character-form"
        onFinish={updateUser}
        validateMessages={validateMessages}
        className="edit-character-form"
      >
        <Form.Item label="Name" name="name">
          <Input defaultValue={user?.name} />
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
        <Form.Item name={['user', 'email']} label="Email">
          <Input disabled defaultValue={user?.email} />
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
