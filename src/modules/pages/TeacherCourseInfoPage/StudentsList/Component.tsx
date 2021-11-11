import React, { useState } from 'react';
import { Select, Row, Col, Table, Button } from 'antd';
import { StudentsListProps } from './types';
import 'react-quill/dist/quill.snow.css';
import InviteStudentModal from './InviteStudentModal';

function StudentsList(props: StudentsListProps): React.ReactElement {
  const { user } = props;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const { Option } = Select;

  const columns: any = [
    {
      title: 'First Name',
      width: 5,
      dataIndex: 'firstname',
      sorter: (a: any, b: any) => a.firstname.length - b.firstname.length,
    },
    {
      title: 'Last Name',
      width: 5,
      dataIndex: 'lastname',
      defaultSortOrder: 'descend',
      sorter: (a: any, b: any) => a.lastname.length - b.lastname.length,
    },
    {
      title: 'Pronouns',
      width: 3,
      dataIndex: 'pronouns',
      sorter: (a: any, b: any) => a.pronouns.length - b.pronouns.length,
    },
    {
      title: 'Email',
      width: 7,
      dataIndex: 'email',
      sorter: (a: any, b: any) => a.email.length - b.email.length,
    },
    {
      title: 'Invite Status',
      width: 4,
      dataIndex: 'status',
      sorter: (a: any, b: any) => a.status.length - b.status.length,
    },
  ];

  const data: any = [
    {
      firstname: 'Marguerite',
      lastname: 'Brugger',
      pronouns: 'She/Her',
      email: 'bruggermarguerite@gmail.com',
      status: 'Accepted',
    },
  ];

  return (
    <>
      <Row style={{ height: '10%' }}>
        <Col span={18} />
        <Col span={3}>
          <Button
            type="primary"
            style={{ width: '100%' }}
            onClick={() => setIsModalVisible(true)}
          >
            {' '}
            Invite Adventurer{' '}
          </Button>
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
      {isModalVisible && (
        <InviteStudentModal
          user={user}
          courseId={5}
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
        />
      )}
    </>
  );
}

export default StudentsList;
