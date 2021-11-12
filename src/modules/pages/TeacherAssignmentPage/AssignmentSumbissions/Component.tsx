import React, { useState, useCallback, useEffect } from 'react';
import ReactQuill from 'react-quill';
import ReactHtmlParser from 'react-html-parser';
import {
  Button,
  InputNumber,
  Row,
  Col,
  Typography,
  List,
  Form,
  Avatar,
  Spin,
  message,
} from 'antd';
import useSWR from 'swr';
import { AssignmentProps } from './types';
import 'react-quill/dist/quill.snow.css';
import './assignmentsubmissions.css';
import { Submission, User } from '../../../general/types';
import { dummyStudent } from '../../../general/dummyData';
import { apiEndpoint } from '../../../root/constants';
import {
  convertResponseDataToSubmissionArray,
  convertResponseDataToUserArray,
} from '../../../general/utils';

const { Text, Title } = Typography;

function AssignmentSubmissions(props: AssignmentProps): React.ReactElement {
  const { user, course, assignment } = props;

  const [selectedUser, setSelectedUser] = useState<User>();
  const [selectedSubmission, setSelectedSubmission] = useState<Submission>();
  const [starInputValue, setStarInputValue] = useState<number>(0);

  const { data: submissions } = useSWR(
    `${apiEndpoint}/assignments/${assignment.id}/submissions`
  );

  const { data: students } = useSWR(
    `${apiEndpoint}/enrolledStudents/${course.id}`
  );

  const [form] = Form.useForm();

  const handleOnClick = useCallback(
    (student: User) => {
      setSelectedUser(student);
    },
    [selectedUser]
  );

  const onFinish = (values: any) => {
    fetch(`${apiEndpoint}/gradeSubmission/${selectedSubmission?.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: selectedSubmission?.content,
        grade: starInputValue,
      }),
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          message.error('There was an issue updating the grade.', 10);
          throw Error(res.statusText);
        }
        message.success('Grade updated!', 10);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (
      submissions !== undefined &&
      students !== undefined &&
      submissions !== null &&
      students !== null
    )
      setSelectedSubmission(
        submissions.filter(
          (submission: any) => submission.user_id === selectedUser?.id
        )[0]
      );
  }, [selectedUser]);

  useEffect(() => {
    if (students !== undefined) {
      setSelectedUser(students[0]);
    }
  }, [students]);

  useEffect(() => {
    if (selectedSubmission !== undefined && selectedSubmission !== null) {
      setStarInputValue(selectedSubmission.grade);
    }
  }, [selectedSubmission]);

  if (selectedSubmission === null || selectedUser === null) {
    return <Spin size="large" />;
  }

  return (
    <>
      <Row>
        <Col span={2} />
        <Col span={5} className="sidebar" style={{ margin: 0, padding: 0 }}>
          <List
            size="small"
            dataSource={students}
            renderItem={(student: any) => (
              <List.Item
                id="hoverable"
                style={
                  selectedUser === student
                    ? { background: '#FF7875', color: 'white' }
                    : {}
                }
                onClick={() => handleOnClick(student)}
              >
                {student.name}
              </List.Item>
            )}
          />
        </Col>
        <Col span={1} />
        {selectedSubmission && starInputValue ? (
          <Col span={14}>
            <Form
              form={form}
              layout="vertical"
              requiredMark={false}
              onFinish={onFinish}
            >
              <Row className="assignment">
                <Col span={2}>
                  <Avatar
                    alt="profile avatar"
                    src={selectedUser?.selectedAvatar}
                    style={{ width: '3em' }}
                  />
                </Col>
                <Col span={4}>{selectedUser?.name}</Col>
                <Col span={8} />
                <Col span={2}>
                  <Text>Stars:</Text>
                </Col>
                <Col span={4}>
                  <Form.Item name="stars">
                    <InputNumber
                      min={0}
                      max={5}
                      style={{ margin: '0 16px' }}
                      defaultValue={starInputValue}
                      value={starInputValue}
                      onChange={setStarInputValue}
                    />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: '100%' }}
                    >
                      Save
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <Row className="text">
              <div style={{ margin: '2%' }}>
                {ReactHtmlParser(selectedSubmission.content)}
              </div>
            </Row>
          </Col>
        ) : (
          <div>
            <br />
            <br />
            <Title level={2} className="title" style={{ color: '#b4b5b7' }}>
              Not Submitted
            </Title>
          </div>
        )}
        <Col span={2} />
      </Row>
    </>
  );
}

export default AssignmentSubmissions;
