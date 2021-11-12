import React from 'react';
import ReactQuill from 'react-quill';
import useSWR from 'swr';
import {
  Form,
  Input,
  Button,
  DatePicker,
  TimePicker,
  Statistic,
  Select,
  Row,
  Col,
  Typography,
  Spin,
} from 'antd';
import moment from 'moment';
import { AssignmentProps } from './types';
import 'react-quill/dist/quill.snow.css';
import './assignmentdescription.css';
import { apiEndpoint } from '../../../root/constants';
import { Unit } from '../../../general/types';

const { Text } = Typography;

function AssignmentDescription(props: AssignmentProps): React.ReactElement {
  const { user, course, assignment } = props;

  const [form] = Form.useForm();
  const { data: submissions } = useSWR(
    `${apiEndpoint}/assignments/${assignment.id}/submissions`
  );
  const { data: students } = useSWR(
    `${apiEndpoint}/enrolledStudents/${course.id}`
  );
  const { data: units } = useSWR(`${apiEndpoint}/courses/${course.id}/units`);

  const format = 'HH:mm';

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

  const { Option } = Select;

  const onFinish = (values: any) => {
    console.log(values);
  };

  if (
    submissions === undefined ||
    students === undefined ||
    units === undefined
  ) {
    return <Spin size="large" />;
  }

  return (
    <>
      <Form onFinish={onFinish}>
        <Row>
          <Col span={3} />
          <Col span={13} style={{ background: 'white' }}>
            <Row style={{ paddingBottom: '1%' }}>
              <Col span={18}>
                <Form.Item
                  name="assignmentname"
                  rules={[
                    { required: true, message: 'Please name your quest!' },
                  ]}
                >
                  <Input defaultValue={assignment.name} />
                </Form.Item>
              </Col>
              <Col span={6}>
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
            <Row>
              <Form.Item name="description" style={{ width: '100%' }}>
                <div
                  className="text-editor"
                  style={{ width: '100%', height: '58vh' }}
                >
                  <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    style={{ height: '100%' }}
                    defaultValue={assignment.content}
                  />
                </div>
              </Form.Item>
            </Row>
          </Col>
          <Col span={1} />
          <Col span={4} className="sidebar">
            <Row style={{ height: '10%' }}>
              <Statistic
                title="Submissions"
                value={submissions.length}
                suffix={`/ ${students.length}`}
              />
            </Row>
            <Row style={{ height: '10%' }} />
            <Row style={{ height: '20%' }}>
              <Text>Expiration:</Text>
              <Form.Item
                name="duedate"
                rules={[
                  {
                    required: true,
                    message: 'Expiration Date is required',
                  },
                ]}
                style={{ width: '100%' }}
              >
                <DatePicker
                  defaultValue={moment(assignment.dueDate)}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item
                name="duetime"
                rules={[
                  {
                    required: true,
                    message: 'Expiration Time is required',
                  },
                ]}
                style={{ width: '100%' }}
              >
                <TimePicker
                  defaultValue={moment(assignment.dueDate)}
                  format={format}
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Row>
            <Row style={{ height: '10%' }} />
            <Row style={{ height: '20%' }}>
              <Text>Available:</Text>
              <Form.Item
                name="availabledate"
                rules={[
                  {
                    required: true,
                    message: 'Available Date is required',
                  },
                ]}
                style={{ width: '100%' }}
              >
                <DatePicker
                  defaultValue={moment(assignment.createdAt)}
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item
                name="availabletime"
                rules={[
                  {
                    required: true,
                    message: 'Available Time is required',
                  },
                ]}
                style={{ width: '100%' }}
              >
                <TimePicker
                  defaultValue={moment(assignment.createdAt)}
                  format={format}
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Row>
            <Row style={{ height: '10%' }} />
            <Row style={{ height: '20%' }}>
              <Form.Item
                name="unit"
                rules={[
                  {
                    required: true,
                    message: 'Please assign it to a Chapter!',
                  },
                ]}
                style={{ width: '100%' }}
              >
                <Text>Chapter:</Text>
                <Select
                  defaultValue={assignment.unitId}
                  style={{ width: '100%' }}
                >
                  {units.map((unit: Unit) => (
                    <Option value={unit.id}>{unit.name}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Row>
          </Col>
          <Col span={3} />
        </Row>
      </Form>
    </>
  );
}

export default AssignmentDescription;
