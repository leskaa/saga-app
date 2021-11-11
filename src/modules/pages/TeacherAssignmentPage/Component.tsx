import React, { useContext } from 'react';
import { Layout, Tabs, Row, Card, Col, Typography } from 'antd';
import { GlobalContext } from '../../root/GlobalStore';
import { dummyStudent } from '../../general/dummyData';
import AssignmentDescription from './AssignmentDescription';
import AssignmentSumbissions from './AssignmentSumbissions';
import './teacherassignmentpage.css';

const { Content } = Layout;
const { TabPane } = Tabs;

const { Title, Text } = Typography;

function TeacherAssignmentPage(): React.ReactElement {
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser ?? dummyStudent;

  return (
    <Content className="container">
      <Title style={{ textAlign: 'center' }}>
        <br /> Quest Name
      </Title>
      <Tabs defaultActiveKey="1" centered>
        <TabPane forceRender tab="Task" key="1">
          <AssignmentDescription user={user} />
        </TabPane>
        <TabPane forceRender tab="Submissions" key="2">
          <AssignmentSumbissions user={user} />
        </TabPane>
      </Tabs>
    </Content>
  );
}

export default TeacherAssignmentPage;
