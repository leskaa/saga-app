import React, { useContext  } from "react";
import { Layout, Tabs, Row, Card, Col, Typography } from "antd";
import { GlobalContext } from "../../root/GlobalStore";
import { dummyStudent } from "../../general/dummyData";
import AddAssignment from "./AddAssignment";
import EditCourse from "./EditCourse";
import StudentsList from "./StudentsList";
import Grading from "./Grading";
import AssignmentList from "./AssignmentList";

const { Content } = Layout;
const { TabPane } = Tabs;

const { Title, Text } = Typography;

function TeacherCourseInfoPage(): React.ReactElement {
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser ?? dummyStudent;
  
  return (
    <Content>
        <Title style={{textAlign: 'center'}}>
            <br/> Course Name
        </Title>
        <Tabs defaultActiveKey={'1'} centered>
            <TabPane forceRender tab="Quests" key="1">
                <AssignmentList user={user}/>
            </TabPane>
            <TabPane forceRender tab="Adventurers" key="2">
                <StudentsList user={user}/>
            </TabPane>
            <TabPane forceRender tab="Stars" key="3">
                <Grading user={user}/>
            </TabPane>
            <TabPane forceRender tab="New Quest" key="4">
                <AddAssignment user={user}/>
            </TabPane>
            <TabPane forceRender tab="Edit" key="5">
                <EditCourse user={user}/> 
            </TabPane>
        </Tabs>
    </Content>
  );

}

export default TeacherCourseInfoPage;