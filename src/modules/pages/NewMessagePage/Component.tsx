import React from 'react';
import {
  Layout,
  Row,
  Col,
  Typography,
  Checkbox,
  Divider,
  Select,
  Form,
  Input,
  Button,
} from 'antd';
import ReactQuill from 'react-quill';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const plainOptions = [
  'FirstName1 LastName1',
  'FirstName2 LastName2',
  'FirstName3 LastName3',
  'FirstName4 LastName4',
  'FirstName5 LastName5',
  'FirstName6 LastName6',
  'FirstName7 LastName7',
  'FirstName8 LastName8',
  'FirstName9 LastName9',
  'FirstName10 LastName10',
  'FirstName11 LastName11',
  'FirstName12 LastName12',
  'FirstName13 LastName13',
  'FirstName14 LastName14',
  'FirstName15 LastName15',
  'FirstName16 LastName16',
  'FirstName17 LastName17',
  'FirstName18 LastName18',
  'FirstName19 LastName19',
  'FirstName20 LastName20',
];
const defaultCheckedList = ['Apple', 'Orange'];

function NewMessagePage(): React.ReactElement {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

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
    <Content className="container">
      <Row>
        <Title className="title" style={{ margin: 'auto', padding: '3%' }}>
          New Message
        </Title>
      </Row>
      <Row>
        <Col span={2} />
        <Col span={20}>
          <Form form={form} layout="vertical" requiredMark={false}>
            <Row>
              <Col span={6}>
                <Select
                  defaultValue="course1"
                  style={{ width: '100%', marginBottom: '10%' }}
                >
                  <Option value="course1">Adventure 1</Option>
                  <Option value="course2">Adventure 2</Option>
                  <Option value="course3">Adventure 3</Option>
                </Select>

                <Checkbox
                  indeterminate={indeterminate}
                  onChange={onCheckAllChange}
                  checked={checkAll}
                >
                  Select all
                </Checkbox>
                <Divider />
                <Checkbox.Group
                  value={checkedList}
                  onChange={onChange}
                  style={{ width: '100%', height: '48vh', overflow: 'scroll' }}
                >
                  {plainOptions.map((option) => (
                    <Row>
                      <Checkbox value={option}>{option}</Checkbox>
                    </Row>
                  ))}
                </Checkbox.Group>

                <Form.Item>
                  <Button className="buttons" type="primary" htmlType="submit">
                    Send Message
                  </Button>
                </Form.Item>
              </Col>
              <Col span={2} />
              <Col span={16}>
                <Row>
                  <Form.Item
                    name="subject"
                    rules={[
                      {
                        required: true,
                        message: 'Please give your message a subject!',
                      },
                    ]}
                    style={{ width: '100%' }}
                  >
                    <Input placeholder="Subject" />
                  </Form.Item>
                </Row>
                <Row style={{ background: 'white' }}>
                  <Form.Item name="message" style={{ width: '100%' }}>
                    <div
                      className="text-editor"
                      style={{ width: '100%', height: '61vh' }}
                    >
                      <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        style={{ height: '100%' }}
                      />
                    </div>
                  </Form.Item>
                </Row>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={2} />
      </Row>
    </Content>
  );
}

export default NewMessagePage;
