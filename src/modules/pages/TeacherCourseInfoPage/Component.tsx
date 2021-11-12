import React, { useContext } from 'react';
import { Layout, Tabs, Row, Card, Col, Typography, Spin } from 'antd';
import { useParams } from 'react-router';
import useSWR from 'swr';
import { GlobalContext } from '../../root/GlobalStore';
import { dummyStudent } from '../../general/dummyData';
import AddAssignment from './AddAssignment';
import EditCourse from './EditCourse';
import StudentsList from './StudentsList';
import Grading from './Grading';
import AssignmentList from './AssignmentList';
import './teachercourseinfo.css';
import { apiEndpoint } from '../../root/constants';
import { convertResponseDataToCourse } from '../../general/utils';

const { Content } = Layout;
const { TabPane } = Tabs;

const { Title, Text } = Typography;

function TeacherCourseInfoPage(): React.ReactElement {
  const { globalState } = useContext(GlobalContext);
  const { courseId } = useParams();
  const { data: course } = useSWR(`${apiEndpoint}/courses/${courseId}`);
  const user = globalState.loggedInUser ?? dummyStudent;

  if (course === undefined) {
    return (
      <Content className="container">
        <Spin size="large" />
      </Content>
    );
  }

  return (
    <Content className="container">
      <Title className="title" style={{ textAlign: 'center' }}>
        <br /> {course.name}
      </Title>
      <Tabs defaultActiveKey="1" centered>
        <TabPane forceRender tab="Quests" key="1">
          <AssignmentList
            user={user}
            course={convertResponseDataToCourse(course)}
          />
        </TabPane>
        <TabPane forceRender tab="Adventurers" key="2">
          <StudentsList user={user} course={course} />
        </TabPane>
        {/* <TabPane forceRender tab="Stars" key="3">
          <Grading user={user} />
        </TabPane> */}
        <TabPane forceRender tab="New Quest" key="4">
          <AddAssignment
            user={user}
            course={convertResponseDataToCourse(course)}
          />
        </TabPane>
        <TabPane forceRender tab="Edit" key="5">
          <EditCourse
            user={user}
            course={convertResponseDataToCourse(course)}
          />
        </TabPane>
      </Tabs>
    </Content>
  );
}

export default TeacherCourseInfoPage;
