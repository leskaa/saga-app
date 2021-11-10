import React, { useState } from 'react';
import { Select, Row, Col, Table, Button } from 'antd';
import { AssignmentListProps } from './types';
import 'react-quill/dist/quill.snow.css';

function AssignmentList(props: AssignmentListProps): React.ReactElement {
  const { user } = props;

  const { Option } = Select;

  const columns: any = [
    {
      title: 'Quest Name',
      width: 4,
      dataIndex: 'questname',
      ellipsis: true,
      sorter: (a: any, b: any) => a.questname.length - b.questname.length,
    },
    {
      title: 'Description',
      width: 8,
      dataIndex: 'description',
      ellipsis: true,
      sorter: (a: any, b: any) => a.description.length - b.description.length,
    },
    {
      title: 'Expiration Date',
      width: 3,
      dataIndex: 'duedate',
      sorter: (a: any, b: any) => a.duedate.length - b.duedate.length,
    },
  ];

  const data: any = [
    {
      questname: 'Quest 1',
      description:
        'This is the first quest that you have assigned, congratulations! Blah Blah Blah filler stuff filler stuff',
      duedate: `11/10/2021 @ 14:30`,
    },
  ];

  return (
    <>
      <Row style={{ height: '10%' }}>
        <Col span={15} />
        <Col span={6}>
          <Select defaultValue="unit1" style={{ width: '100%' }}>
            <Option value="unit1">Unit 1</Option>
            <Option value="unit2">Unit 2</Option>
            <Option value="unit3">Unit 3</Option>
          </Select>
        </Col>
        <Col span={3} />
      </Row>
      <Row style={{ height: '10%' }} />
      <Row style={{ height: '80%' }}>
        <Col span={3} />
        <Col span={18}>
          <Table columns={columns} dataSource={data} scroll={{ y: 250 }} />
        </Col>
        <Col span={3} />
      </Row>
    </>
  );
}

export default AssignmentList;
