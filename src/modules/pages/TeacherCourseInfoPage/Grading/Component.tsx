import React from 'react';
import ReactQuill from 'react-quill';
import { Form, Input, Select, Table, InputNumber, Rate, Row, Col } from 'antd';
import moment from 'moment';
import { GradingProps } from './types';
import 'react-quill/dist/quill.snow.css';

function Grading(props: GradingProps): React.ReactElement {
  const { user } = props;

  const [form] = Form.useForm();

  const { Option } = Select;

  const columns: any = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
      fixed: 'left',
      sorter: (a: any, b: any) => a.firstname.length - b.firstname.length,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      fixed: 'left',
      defaultSortOrder: 'descend',
      sorter: (a: any, b: any) => a.lastname.length - b.lastname.length,
    },
    {
      title: 'Quest 1',
      dataIndex: 'assignment1',
      sorter: (a: any, b: any) => a.assignment1.length - b.assignment1.length,
    },
    {
      title: 'Quest 2',
      dataIndex: 'assignment2',
      sorter: (a: any, b: any) => a.assignment2.length - b.assignment2.length,
    },
    {
      title: 'Quest 3',
      dataIndex: 'assignment3',
      sorter: (a: any, b: any) => a.assignment3.length - b.assignment3.length,
    },
    {
      title: 'Quest 4',
      dataIndex: 'assignment4',
      sorter: (a: any, b: any) => a.assignment4.length - b.assignment4.length,
    },
    {
      title: 'Quest 5',
      dataIndex: 'assignment5',
      sorter: (a: any, b: any) => a.assignment5.length - b.assignment5.length,
    },
    {
      title: 'Quest 6',
      dataIndex: 'assignment6',
      sorter: (a: any, b: any) => a.assignment6.length - b.assignment6.length,
    },
    {
      title: 'Quest 7',
      dataIndex: 'assignment7',
      sorter: (a: any, b: any) => a.assignment7.length - b.assignment7.length,
    },
    {
      title: 'Quest 8',
      dataIndex: 'assignment8',
      sorter: (a: any, b: any) => a.assignment8.length - b.assignment8.length,
    },
    {
      title: 'Quest 9',
      dataIndex: 'assignment9',
      sorter: (a: any, b: any) => a.assignment9.length - b.assignment9.length,
    },
    {
      title: 'Quest 10',
      dataIndex: 'assignment10',
      sorter: (a: any, b: any) => a.assignment10.length - b.assignment10.length,
    },
    {
      title: 'Overall',
      dataIndex: 'overall',
      fixed: 'right',
      sorter: (a: any, b: any) => a.overall.length - b.overall.length,
    },
  ];

  const data: any = [
    {
      key: '1',
      firstname: 'Marguerite',
      lastname: 'Brugger',
      assignment1: (
        <InputNumber
          defaultValue={5}
          min={0}
          max={5}
          style={{ margin: '0 16px' }}
        />
      ),
      assignment2: (
        <InputNumber
          defaultValue={3}
          min={0}
          max={5}
          style={{ margin: '0 16px' }}
        />
      ),
      assignment3: (
        <InputNumber
          defaultValue={5}
          min={0}
          max={5}
          style={{ margin: '0 16px' }}
        />
      ),
      assignment4: (
        <InputNumber
          defaultValue={4}
          min={0}
          max={5}
          style={{ margin: '0 16px' }}
        />
      ),
      assignment5: <InputNumber min={0} max={5} style={{ margin: '0 16px' }} />,
      assignment6: <InputNumber min={0} max={5} style={{ margin: '0 16px' }} />,
      assignment7: <InputNumber min={0} max={5} style={{ margin: '0 16px' }} />,
      assignment8: <InputNumber min={0} max={5} style={{ margin: '0 16px' }} />,
      assignment9: <InputNumber min={0} max={5} style={{ margin: '0 16px' }} />,
      assignment10: (
        <InputNumber min={0} max={5} style={{ margin: '0 16px' }} />
      ),
      overall: 'idk lol',
    },
  ];

  return (
    <>
      <Row style={{ height: '10%' }}>
        <Col span={17} />
        <Col span={6}>
          <Select defaultValue="unit1" style={{ width: '100%' }}>
            <Option value="unit1">Unit 1</Option>
            <Option value="unit2">Unit 2</Option>
            <Option value="unit3">Unit 3</Option>
          </Select>
        </Col>
        <Col span={1} />
      </Row>
      <Row style={{ height: '10%' }} />
      <Row style={{ height: '80%' }}>
        <Col span={1} />
        <Col span={22}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 50 }}
            scroll={{ x: 2000 }}
          />
        </Col>
        <Col span={1} />
      </Row>
    </>
  );
}

export default Grading;
