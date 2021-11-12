import React, { useContext } from 'react';
import { Layout, Tabs, Row, Card, Col, Typography, Spin } from 'antd';
import { useParams } from 'react-router';
import useSWR from 'swr';
import { GlobalContext } from '../../root/GlobalStore';
import { dummyStudent } from '../../general/dummyData';
import AssignmentDescription from './AssignmentDescription';
import AssignmentSumbissions from './AssignmentSumbissions';
import './teacherassignmentpage.css';
import { apiEndpoint } from '../../root/constants';
import {
  convertResponseDataToAssignment,
  convertResponseDataToCourse,
} from '../../general/utils';

const { Content } = Layout;
const { TabPane } = Tabs;

const { Title, Text } = Typography;

function TeacherAssignmentPage(): React.ReactElement {
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser ?? dummyStudent;
  const { courseId, assignmentId } = useParams();
  const { data: quest } = useSWR(
    `${apiEndpoint}/getAssignment/${assignmentId}`
  );
  const { data: course } = useSWR(`${apiEndpoint}/courses/${courseId}`);

  if (quest === undefined || course === undefined) {
    return <Spin size="large" />;
  }

  return (
    <Content className="container">
      <Title className="title" style={{ textAlign: 'center' }}>
        <br /> {quest.name}
      </Title>
      <Tabs defaultActiveKey="1" centered>
        <TabPane forceRender tab="Task" key="1">
          <AssignmentDescription
            user={user}
            course={convertResponseDataToCourse(course)}
            assignment={convertResponseDataToAssignment(quest)}
          />
        </TabPane>
        <TabPane forceRender tab="Submissions" key="2">
          <AssignmentSumbissions
            user={user}
            course={convertResponseDataToCourse(course)}
            assignment={convertResponseDataToAssignment(quest)}
          />
        </TabPane>
      </Tabs>
    </Content>
  );
}

export default TeacherAssignmentPage;
