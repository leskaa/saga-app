import React from 'react';
import { Modal, Form, Input, Button, Typography, message } from 'antd';
import { CreateCourseModalProps } from './types';
import { apiEndpoint } from '../../../../root/constants';
import EditCourse from '../../../TeacherCourseInfoPage/EditCourse';

const { Title } = Typography;

function CreateCourseModal(props: CreateCourseModalProps): React.ReactElement {
  const { user, ...rest } = props;

  return (
    <Modal footer={null} {...rest} width="60%" style={{ textAlign: 'center' }}>
      <Title className="title">Create Adventure</Title>
      <EditCourse user={user} />
    </Modal>
  );
}

export default CreateCourseModal;
