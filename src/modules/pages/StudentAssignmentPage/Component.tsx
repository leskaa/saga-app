import React, { useContext } from 'react';
import { Layout, Tabs, Row, Card, Col, Typography, Spin } from 'antd';
import './studentassignmentpage.css';
import useSWR from 'swr';
import { useParams } from 'react-router';
import { apiEndpoint } from '../../root/constants';
import { GlobalContext } from '../../root/GlobalStore';
import { dummyStudent } from '../../general/dummyData';
import AssignmentDescription from './AssignmentDescription';
import AssignmentSumbission from './AssignmentSumbissions';
import { convertResponseDataToAssignment } from '../../general/utils';

const { Content } = Layout;
const { TabPane } = Tabs;

const { Title, Text } = Typography;

function StudentAssignmentPage(): React.ReactElement {
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser ?? dummyStudent;
  const { questId } = useParams();

  const { data: assignment } = useSWR(
    `${apiEndpoint}/getAssignment/${questId}`
  );

  if (!assignment) {
    return <Spin size="large" />;
  }

  return (
    <Content className="container">
      <Title className="title" style={{ textAlign: 'center' }}>
        <br /> {assignment.name}
      </Title>
      <Tabs defaultActiveKey="1" centered>
        <TabPane forceRender tab="Task" key="1">
          <AssignmentDescription
            user={user}
            assignment={convertResponseDataToAssignment(assignment)}
          />
        </TabPane>
        <TabPane forceRender tab="Submission" key="2">
          <AssignmentSumbission
            user={user}
            assignment={convertResponseDataToAssignment(assignment)}
          />
        </TabPane>
      </Tabs>
    </Content>
  );
}

export default StudentAssignmentPage;
