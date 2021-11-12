import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import {
  Form,
  Input,
  Button,
  DatePicker,
  TimePicker,
  Select,
  Row,
  Col,
  message,
  Spin,
} from 'antd';
import moment from 'moment';
import useSWR from 'swr';
import { CourseInfoProps } from './types';
import 'react-quill/dist/quill.snow.css';
import { apiEndpoint } from '../../../root/constants';

function AddAssignment(props: CourseInfoProps): React.ReactElement {
  const { user, course } = props;

  const [form] = Form.useForm();

  const [quillText, setQuillText] = useState('');
  const [unitNumber, setUnitNumber] = useState(1);

  // TODO: Sort with SWR Middleware
  const { data: units } = useSWR(`${apiEndpoint}/courses/${course.id}/units/`);

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

  const updateUnit = (value: number) => {
    setUnitNumber(value);
  };

  const { Option } = Select;

  const onFinish = (values: any) => {
    fetch(
      `${apiEndpoint}/courses/${course.id}/units/${
        units[unitNumber - 1].id
      }/assignments/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.assignmentname,
          content: quillText,
          dueDate: `${values.duedate.format(
            'YYYY-MM-DD'
          )} ${values.duetime.format('HH:mm:ss')}`,
        }),
        credentials: 'include',
      }
    )
      .then((res) => {
        if (!res.ok) {
          message.error('There was an issue creating the quest.', 10);
          throw Error(res.statusText);
        }
        message.success('Quest created!', 10);
      })
      .catch((err) => console.error(err));
  };

  if (units === undefined) {
    return <Spin size="large" />;
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
            <Row>
              <Col span={16}>
                <Form.Item
                  name="assignmentname"
                  label="Quest Name"
                  rules={[
                    { required: true, message: 'Please name your quest!' },
                  ]}
                >
                  <Input placeholder="New Quest" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="unit"
                  label="Chapter"
                  rules={[
                    {
                      required: true,
                      message: 'Please assign it to a Chapter!',
                    },
                  ]}
                >
                  <Select defaultValue={units[0].name} onChange={updateUnit}>
                    {units.map((unit: any) => (
                      <Option value={unit.unit_number}>{unit.name}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <Form.Item name="availabledate" label="Available Date">
                  <DatePicker defaultValue={moment()} />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item name="availabletime" label="Available Time">
                  <TimePicker format={format} defaultValue={moment()} />
                </Form.Item>
              </Col>
              <Col span={8} />
              <Col span={4}>
                <Form.Item
                  name="duedate"
                  label="Expiration Date"
                  rules={[
                    {
                      required: true,
                      message: 'Expiration Date is required',
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item
                  name="duetime"
                  label="Expiration Time"
                  rules={[
                    {
                      required: true,
                      message: 'Expiration Time is required',
                    },
                  ]}
                >
                  <TimePicker format={format} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="description" label="Description">
              <div
                className="text-editor"
                style={{ background: 'white', height: '30vh' }}
              >
                <ReactQuill
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  value={quillText}
                  onChange={setQuillText}
                  style={{ height: '80%' }}
                />
              </div>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Quest
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={3} />
      </Row>
    </>
  );
}

export default AddAssignment;
