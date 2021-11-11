import React, { useState } from 'react';
import { Select, Row, Col, Table, Spin } from 'antd';
import useSWR from 'swr';
import { AssignmentListProps } from './types';
import 'react-quill/dist/quill.snow.css';
import { apiEndpoint } from '../../../root/constants';
import { Unit } from '../../../general/types';

function AssignmentList(props: AssignmentListProps): React.ReactElement {
  const { user, course } = props;
  const [unitNumber, setUnitNumber] = useState(1);
  // TODO: Sort with SWR Middleware
  const { data: units } = useSWR(`${apiEndpoint}/courses/${course.id}/units/`);
  const { data: assignments } = useSWR(
    () =>
      `${apiEndpoint}/courses/${course.id}/units/${
        units[unitNumber - 1].id
      }/assignments`
  );

  const { Option } = Select;

  const columns: any = [
    {
      title: 'Quest Name',
      width: 4,
      dataIndex: 'name',
      ellipsis: true,
      sorter: (a: any, b: any) => a.name.length - b.name.length,
    },
    {
      title: 'Description',
      width: 8,
      dataIndex: 'content',
      ellipsis: true,
      sorter: (a: any, b: any) => a.content.length - b.content.length,
    },
    {
      title: 'Expiration Date',
      width: 3,
      dataIndex: 'due_date',
      sorter: (a: any, b: any) => a.due_date.length - b.due_date.length,
    },
  ];

  const updateUnit = (value: number) => {
    setUnitNumber(value);
  };

  if (assignments === undefined) {
    return <Spin size="large" />;
  }

  return (
    <>
      <Row style={{ height: '10%' }}>
        <Col span={15} />
        <Col span={6}>
          <Select
            defaultValue={units[0].name}
            onChange={updateUnit}
            style={{ width: '100%' }}
          >
            {units.map((unit: any) => (
              <Option value={unit.unit_number}>{unit.name}</Option>
            ))}
          </Select>
        </Col>
        <Col span={3} />
      </Row>
      <Row style={{ height: '10%' }} />
      <Row style={{ height: '80%' }}>
        <Col span={3} />
        <Col span={18}>
          <Table
            columns={columns}
            dataSource={assignments}
            scroll={{ y: 250 }}
          />
        </Col>
        <Col span={3} />
      </Row>
    </>
  );
}

export default AssignmentList;
