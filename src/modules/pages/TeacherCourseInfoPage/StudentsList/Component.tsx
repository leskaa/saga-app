import React, { useState } from 'react';
import useSWR from 'swr';
import { Select, Row, Col, Table, Button, Avatar } from 'antd';
import { StudentsListProps } from './types';
import 'react-quill/dist/quill.snow.css';
import InviteStudentModal from './InviteStudentModal';
import { apiEndpoint } from '../../../root/constants';

function StudentsList(props: StudentsListProps): React.ReactElement {
  const { user, course } = props;
  const { data, error } = useSWR(
    `${apiEndpoint}/enrolledStudents/${course.id}`
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  console.log(data);

  const columns: any = [
    {
      title: 'Avatar',
      width: 4,
      dataIndex: 'selected_avatar_url',
      align: 'center',
      render: (avatar: string) => (
        <Avatar alt="profile avatar" src={avatar} style={{ width: '3em' }} />
      ),
    },
    {
      title: 'First Name',
      width: 5,
      dataIndex: 'name',
      sorter: (a: any, b: any) => a.firstname.length - b.firstname.length,
    },
    {
      title: 'Last Name',
      width: 5,
      dataIndex: 'name',
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

  return (
    <>
      <Row style={{ height: '10%' }}>
        <Col span={10} />
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
