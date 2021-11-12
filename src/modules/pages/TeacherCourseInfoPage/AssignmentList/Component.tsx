import React, { useState } from 'react';
import { Select, Row, Col, Table, Spin } from 'antd';
import useSWR from 'swr';
import ReactHtmlParser from 'react-html-parser';
import { AssignmentListProps } from './types';
import 'react-quill/dist/quill.snow.css';
import { apiEndpoint } from '../../../root/constants';
import { Assignment, Unit } from '../../../general/types';
import {
  convertResponseDataToAssignment,
  convertResponseDataToAssignmentArray,
  convertResponseDataToUnitArray,
} from '../../../general/utils';

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

  const getLink = (assignment: Assignment) => {
    return (
      <a href={`/#/viewquest/${course.id}/${assignment.id}`}>
        {assignment.name}
      </a>
    );
  };

  if (assignments === undefined || units === undefined) {
    return <Spin size="large" />;
  }

  const chapters = convertResponseDataToUnitArray(units);
  console.log(chapters);

  return (
    <>
      <Row style={{ height: '10%' }}>
        <Col span={15} />
        <Col span={6}>
          <Select
            defaultValue={chapters[0].unitNumber}
            onChange={updateUnit}
            style={{ width: '100%' }}
          >
            {chapters.map((unit: any) => (
              <Option value={unit.unitNumber}>{unit.name}</Option>
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
            dataSource={convertResponseDataToAssignmentArray(assignments).map(
              (assignment: Assignment) => ({
                name: getLink(assignment),
                content: ReactHtmlParser(assignment.content),
                due_date: assignment.dueDate.toLocaleString(),
              })
            )}
            scroll={{ y: 250 }}
          />
        </Col>
        <Col span={3} />
      </Row>
    </>
  );
}

export default AssignmentList;
