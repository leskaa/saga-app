import React, { useContext, useState, useEffect } from 'react';
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
  Spin,
} from 'antd';
import useSWR from 'swr';
import ReactQuill from 'react-quill';
import { GlobalContext } from '../../root/GlobalStore';
import { dummyStudent } from '../../general/dummyData';
import { apiEndpoint } from '../../root/constants';
import { Course, Student, Unit } from '../../general/types';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

// const plainOptions = [
//   'FirstName1 LastName1',
//   'FirstName2 LastName2',
//   'FirstName3 LastName3',
//   'FirstName4 LastName4',
//   'FirstName5 LastName5',
//   'FirstName6 LastName6',
//   'FirstName7 LastName7',
//   'FirstName8 LastName8',
//   'FirstName9 LastName9',
//   'FirstName10 LastName10',
//   'FirstName11 LastName11',
//   'FirstName12 LastName12',
//   'FirstName13 LastName13',
//   'FirstName14 LastName14',
//   'FirstName15 LastName15',
//   'FirstName16 LastName16',
//   'FirstName17 LastName17',
//   'FirstName18 LastName18',
//   'FirstName19 LastName19',
//   'FirstName20 LastName20',
// ];
const defaultCheckedList = ['Apple', 'Orange'];

function NewMessagePage(): React.ReactElement {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser ?? dummyStudent;
  const [form] = Form.useForm();

  const { data: courses } = useSWR(`${apiEndpoint}/courses`);

  const [selectedCourse, setSelectedCourse] = useState<Course>();

  useEffect(() => {
    if (courses !== undefined) {
      setSelectedCourse(courses[0]);
    }
  }, [courses]);

  const { data: students } = useSWR(
    () => `${apiEndpoint}/enrolledStudents/${selectedCourse?.id}`
  );

  const studentList: Student[] = students !== undefined ? students : [];

  const newStudentList: string[] = studentList.map(
    (student: Student) => student.name
  );

  if (courses === undefined) {
    return <Spin size="large" />;
  }

  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < newStudentList.length);
    setCheckAll(list.length === newStudentList.length);
  };

  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? newStudentList : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

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
          New Letter
        </Title>
      </Row>
      <Row>
        <Col span={2} />
        <Col span={20}>
          <Form form={form} layout="vertical" requiredMark={false}>
            <Row>
              <Col span={6}>
                <Select
                  defaultValue={0}
                  style={{ width: '100%', marginBottom: '10%' }}
                >
                  {courses.map((course: Course, index: number) => (
                    <Option value={index}>{course.name}</Option>
                  ))}
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
                  {newStudentList.map((student: string) => (
                    <Row>
                      <Checkbox value={student}>{student}</Checkbox>
                    </Row>
                  ))}
                </Checkbox.Group>

                <Form.Item>
                  <Button className="buttons" type="primary" htmlType="submit">
                    Send Letter
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
