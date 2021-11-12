/* eslint-disable no-nested-ternary */
import React, { useContext, useState, useCallback } from 'react';
import { Modal, Form, Input, Button, Typography, Result, Spin } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
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
  const { onHide, ...rest } = props;
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser;

  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isSpinner, setIsSpinner] = useState<boolean>(false);

  const onFinish = useCallback(async () => {
    setIsFinished(true);
    setIsSpinner(true);
    await new Promise((f) => setTimeout(f, 1000));
    setIsSpinner(false);
  }, []);

  return (
    <Modal
      footer={null}
      className="support-modal"
      onOk={onHide}
      onCancel={onHide}
      width={500}
      bodyStyle={{
        height: '400px',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        display: 'flex',
      }}
      centered
      zIndex={50}
      {...rest}
    >
      {!isFinished ? (
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="support-form"
        >
          <Form.Item
            name={['user', 'name']}
            label="Name"
            initialValue={user?.name}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="Email"
            initialValue={user?.email}
          >
            <Input disabled />
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
      ) : isSpinner ? (
        <Spin size="large" style={{ margin: '0 auto' }} />
      ) : (
        <Result
          icon={<SmileOutlined />}
          title="Great, we have received your support request!"
          extra={
            <Button type="primary" onClick={() => onHide()}>
              Close
            </Button>
          }
        />
      )}
    </Modal>
  );
}

export default SupportModal;
