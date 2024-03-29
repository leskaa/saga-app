import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router';
import ReactHtmlParser from 'react-html-parser';
import {
  Button,
  InputNumber,
  Row,
  Col,
  Typography,
  List,
  Form,
  message,
  Spin,
} from 'antd';
import useSWR from 'swr';
import { AssignmentProps } from './types';
import 'react-quill/dist/quill.snow.css';
import './studentassignmentsubmissions.css';
import { apiEndpoint } from '../../../root/constants';
import { Submission } from '../../../general/types';

const { Text } = Typography;

function AssignmentSubmissions(props: AssignmentProps): React.ReactElement {
  const { user, assignment } = props;

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const { data: submissions } = useSWR(
    `${apiEndpoint}/assignments/${assignment.id}/submissions`
  );

  const [quillContent, setQuillContent] = useState('');
  const [alreadySubmitted, setAlreadySubmitted] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    if (submissions !== undefined) {
      const filteredSubmissions = submissions.filter(
        (submission: any) => submission.user_id === user.id
      );
      if (filteredSubmissions.length === 0) {
        setAlreadySubmitted(false);
      } else {
        setAlreadySubmitted(true);
      }
    }
  }, [submissions]);

  if (submissions === undefined || alreadySubmitted === null) {
    return <Spin size="large" />;
  }

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
        content: quillContent,
        assignment_id: assignment.id,
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

  if (alreadySubmitted) {
    const filteredSubmissions = submissions.filter(
      (submission: any) => submission.user_id === user.id
    );

    return (
      <Row>
        <Col span={3} />

        <Col span={18} className="description">
          <div>{ReactHtmlParser(filteredSubmissions[0].content)}</div>
        </Col>
        <Col span={3} />
      </Row>
    );
  }

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
              <Form.Item name="submission" style={{ width: '100%' }}>
                <div className="text-editor">
                  <ReactQuill
                    theme="snow"
                    value={quillContent}
                    onChange={setQuillContent}
                    modules={modules}
                    formats={formats}
                    style={{ height: '55vh' }}
                  />
                </div>
              </Form.Item>
            </Row>
          </Form>
        </Col>
        <Col span={3} />
      </Row>
    </>
  );
}

export default AssignmentSubmissions;
