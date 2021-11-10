import React from 'react';
import ReactQuill from 'react-quill';
import { Form, Input, Select, Table, InputNumber, Rate } from 'antd';
import 'react-quill/dist/quill.snow.css';

function StudentGradesPage(): React.ReactElement {
  const [form] = Form.useForm();

  const { Option } = Select;

  const columns: any = [
    {
      title: 'Quest Name',
      dataIndex: 'assignmentname',
      sorter: (a: any, b: any) =>
        a.assignmentname.length - b.assignmentname.length,
    },
    {
      title: 'Stars',
      dataIndex: 'stars',
      defaultSortOrder: 'descend',
      sorter: (a: any, b: any) => a.stars.length - b.stars.length,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: (a: any, b: any) => a.status.length - b.status.length,
    },
  ];

  const data: any = [
    {
      key: '1',
      assignmentname: 'Quest1',
      stars: <Rate disabled defaultValue={4} />,
      status: 'Completed',
    },
  ];

  return (
    <>
      <header className="App-header">
        <h1>Grading</h1>

        <Select>
          <Option value="adventure1">Adventure 1</Option>
          <Option value="adventure2">Adventure 2</Option>
          <Option value="adventure3">Adventure 3</Option>
        </Select>

        <Table columns={columns} dataSource={data} scroll={{ y: 250 }} />
      </header>
    </>
  );
}

export default StudentGradesPage;
