import React, { useContext, useState } from 'react';
import useSWR from 'swr';
import { Layout, Spin, Button, Typography, Row, Col } from 'antd';
import {
  CustomerServiceFilled,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import Book from './Book';
import { GlobalContext } from '../../../root/GlobalStore';
import { Course } from '../../../general/types';
import { apiEndpoint } from '../../../root/constants';
import { dummyStudent, dummyCourse } from '../../../general/dummyData';
import CreateCourseModal from './CreateCourseModal/CreateCourseModal';

const { Content } = Layout;
const { Title } = Typography;

function MyCoursesPage(): React.ReactElement {
  // TODO: add effect to populate componet state with courses
  const { data, error } = useSWR(`${apiEndpoint}/courses`);
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser ?? dummyStudent;

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const bookColor = Math.floor(Math.random() * 10);

  if (data === undefined) {
    return <Spin size="default" />;
  }
  return (
    <>
      <Content className="container">
        <Row
          style={{
            padding: '2em',
            background: 'none',
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        >
          {user.isTeacher && (
            <Button
              type="primary"
              size="large"
              onClick={() => setIsModalVisible(true)}
            >
              Create Adventure
            </Button>
          )}
        </Row>
        <Row style={{ height: '100%', overflow: 'scroll', padding: '4em' }}>
          {data.length === 0 && user.isTeacher && (
            <Title className="title" style={{ color: '#B4B5B7' }}>
              You have yet to plan an adventure!
            </Title>
          )}
          {data.length === 0 && !user.isTeacher && (
            <Title className="title" style={{ color: '#B4B5B7' }}>
              You don<span>&#39;</span>t have any adventures to go on yet...
            </Title>
          )}
          {data.map((course: Course, i: number) => (
            <Book course={course} colorIndex={(bookColor + i) % 10} />
          ))}
        </Row>
      </Content>
      {isModalVisible && (
        <CreateCourseModal
          user={user}
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
        />
      )}
    </>
  );
}

export default MyCoursesPage;
