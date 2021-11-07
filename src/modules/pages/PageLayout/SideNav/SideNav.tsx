import React, { useState, useCallback } from "react";
import { Menu, Layout } from "antd";
import {
  BookOutlined,
  CalendarOutlined,
  MailOutlined,
  UserOutlined,
  SettingOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import "./sidenav.css";

// TOOD: 
// Will need to take Student/Teacher Object
// Populate Submenus based on courses etc etc

// Give Each Course a logo property?  

const { SubMenu } = Menu;
const { Sider } = Layout;

function SideNav(): React.ReactElement {

  const [collapsed, setCollapsed] = useState<boolean>(true);

  const handleOnClick = useCallback((event) => {
    //DO SOME PATH Stuff

  }, []);

  const onCollapse = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);
  return (
      <Sider className="sideNav" collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu
          mode="inline"
          theme="dark"    
          selectable={false}
          onClick={handleOnClick}
        >
          
          <div className="logo"> 
            {/* <img alt="saga logo"/> */}
          </div>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <SubMenu key="math" icon={<BookOutlined/>} title="My Adventures">
            <Menu.Item key="view all"> View All Adventures </Menu.Item>
            <Menu.Item key="math"> Math </Menu.Item>
            <Menu.Item key="science"> Science </Menu.Item>
            <Menu.Item key="geography"> Geography </Menu.Item>
            <Menu.Item key="history"> History </Menu.Item>
          </SubMenu>
          <Menu.Item key="calendar" icon={<CalendarOutlined />}>
            Quest Board
          </Menu.Item>
          <Menu.Item key="notifications" icon={<MailOutlined />}>
            Notifications
          </Menu.Item>
          <Menu.Item key="profile" icon={<UserOutlined /> }>
            My Character
          </Menu.Item>
          <SubMenu key="settings" icon={<SettingOutlined/>} title="Options">
            <Menu.Item key="sign out"> Sign out </Menu.Item>
            <Menu.Item key="settings"> Settings </Menu.Item>
          </SubMenu>
          <Menu.Item key="support" icon={<QuestionCircleOutlined />}>
            Request Support
          </Menu.Item>
        </Menu>
      </Sider>
  );
}

export default SideNav;