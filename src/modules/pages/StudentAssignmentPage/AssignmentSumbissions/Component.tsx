import React from 'react';
import ReactQuill from 'react-quill';
import { Button, InputNumber, Row, Col, Typography, List, Form } from 'antd';
import { AssignmentProps } from './types';
import 'react-quill/dist/quill.snow.css';
import './studentassignmentsubmissions.css';

const { Text } = Typography;

function AssignmentSubmissions(props: AssignmentProps): React.ReactElement {
  const { user } = props;

  const [form] = Form.useForm();

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

  return (
    <>
      <Row>
        <Col span={3} />
        <Col span={18}>
          <Form form={form} layout="vertical" requiredMark={false}>
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
