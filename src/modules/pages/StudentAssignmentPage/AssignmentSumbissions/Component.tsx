import React from 'react';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router';
import {
  Button,
  InputNumber,
  Row,
  Col,
  Typography,
  List,
  Form,
  message,
} from 'antd';
import { AssignmentProps } from './types';
import 'react-quill/dist/quill.snow.css';
import './studentassignmentsubmissions.css';
import { apiEndpoint } from '../../../root/constants';

const { Text } = Typography;

function AssignmentSubmissions(props: AssignmentProps): React.ReactElement {
  const { user, assignment } = props;

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        { color: [] },
        { background: [] },
      ],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
        { align: [] },
      ],
      ['link', 'code-block'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'color',
    'background',
    'list',
    'bullet',
    'indent',
    'text alignment',
    'link',
    'code block',
  ];

  const onFinish = (values: any) => {
    fetch(`${apiEndpoint}/assignments/${assignment.id}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: values.submission,
      }),
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          message.error('There was an issue submitting.', 10);
          throw Error(res.statusText);
        }
        message.success('Submitted!', 10);
        navigate(`/adventures`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Row>
        <Col span={3} />
        <Col span={18}>
          <Form
            form={form}
            layout="vertical"
            requiredMark={false}
            onFinish={onFinish}
          >
            <Row className="assignment">
              <Col span={20} />
              <Col span={4}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: '100%' }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Row className="text">
              <div className="text-editor" style={{ width: '100%' }}>
                <Form.Item name="submission">
                  <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    style={{ height: '55vh' }}
                  />
                </Form.Item>
              </div>
            </Row>
          </Form>
        </Col>
        <Col span={3} />
      </Row>
    </>
  );
}

export default AssignmentSubmissions;
