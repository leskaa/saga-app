import React from 'react';
import ReactQuill from 'react-quill';
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
} from 'antd';
import moment from 'moment';
import { AssignmentProps } from './types';
import 'react-quill/dist/quill.snow.css';
import './assignmentdescription.css';

const { Text } = Typography;

function AssignmentDescription(props: AssignmentProps): React.ReactElement {
  const { user } = props;

  const [form] = Form.useForm();

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

  return (
    <>
      <Form>
        <Row>
          <Col span={3} />
          <Col span={13} style={{ background: 'white' }}>
            <Row style={{ paddingBottom: '1%' }}>
              <Col span={18}>
                <Input value="Quest Name" />
              </Col>
              <Col span={6}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                >
                  Save
                </Button>
              </Col>
            </Row>
            <Row>
              <div
                className="text-editor"
                style={{ width: '100%', height: '58vh' }}
              >
                <ReactQuill
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  style={{ height: '100%' }}
                />
              </div>
            </Row>
          </Col>
          <Col span={1} />
          <Col span={4} className="sidebar">
            <Row style={{ height: '10%' }}>
              <Statistic title="Submissions" value={45} suffix="/ 59" />
            </Row>
            <Row style={{ height: '10%' }} />
            <Row style={{ height: '20%' }}>
              <Text>Expiration:</Text>
              <DatePicker style={{ width: '100%' }} />
              <TimePicker
                defaultValue={moment('12:08', format)}
                format={format}
                style={{ width: '100%' }}
              />
            </Row>
            <Row style={{ height: '10%' }} />
            <Row style={{ height: '20%' }}>
              <Text>Available:</Text>
              <DatePicker style={{ width: '100%' }} />
              <TimePicker
                defaultValue={moment('12:08', format)}
                format={format}
                style={{ width: '100%' }}
              />
            </Row>
            <Row style={{ height: '10%' }} />
            <Row style={{ height: '20%' }}>
              <Text>Chapter:</Text>
              <Select defaultValue="unit1" style={{ width: '100%' }}>
                <Option value="unit1">Unit 1</Option>
                <Option value="unit2">Unit 2</Option>
                <Option value="unit3">Unit 3</Option>
              </Select>
            </Row>
          </Col>
          <Col span={3} />
        </Row>
      </Form>
    </>
  );
}

export default AssignmentDescription;
