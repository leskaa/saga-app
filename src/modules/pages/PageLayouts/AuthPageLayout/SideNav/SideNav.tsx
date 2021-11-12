import React, { useState, useCallback, useContext } from 'react';
import { Menu, Layout } from 'antd';
import Icon, {
  ReadOutlined,
  AppstoreOutlined,
  MailOutlined,
  UserOutlined,
  ImportOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../../../../Logos/SagaBlack3Svg.svg';
import { SideNavProps, SIDENAV_PATH_MAP } from './types';
import './sidenav.css';
import { GlobalContext } from '../../../../root/GlobalStore';

// TODO:
// Will need to take Student/Teacher Object
// Populate Submenus based on courses etc etc

// Give Each Course a logo property?

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

function SideNav(props: SideNavProps): React.ReactElement {
  const { onRequestSupportClick } = props;
  const navigate = useNavigate();
  const { dispatch } = useContext(GlobalContext);

  const [collapsed, setCollapsed] = useState<boolean>(true);

  const handleOnClick = useCallback(
    (event) => {
      if (event?.key) {
        if (SIDENAV_PATH_MAP.has(event.key)) {
          const path = String(SIDENAV_PATH_MAP.get(event.key));
          navigate(path);
          return;
        }

        if (event.key === '_support') {
          onRequestSupportClick();
        }

        if (event.key === 'sign out') {
          fetch('https://saga-learn.herokuapp.com/logout', { method: 'POST' })
            .then(() => {
              dispatch({ type: 'AUTHENTICATE_USER', payload: false });
              dispatch({ type: 'SET_USER', payload: null });
              navigate('/signin');
            })
            .then((err) => console.error(err));
        }
      }
    },
    [navigate, onRequestSupportClick]
  );

  const onCollapse = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);
  return (
    <Sider
      className="sideNav"
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Menu
        mode="inline"
        selectable={false}
        onClick={handleOnClick}
        theme="light"
      >
        <Content className="logo">
          <Icon component={LogoSvg} style={{ fontSize: '50px' }} />
        </Content>
        <Menu.Item key="_home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <SubMenu
          key="my adventures"
          icon={<ReadOutlined />}
          title="My Adventures"
        >
          <Menu.Item key="_viewalladventures"> View All Adventures </Menu.Item>
          <Menu.Item key="math"> Math </Menu.Item>
          <Menu.Item key="science"> Science </Menu.Item>
          <Menu.Item key="geography"> Geography </Menu.Item>
          <Menu.Item key="history"> History </Menu.Item>
        </SubMenu>
        <Menu.Item key="_questboard" icon={<AppstoreOutlined />}>
          Quest Board
        </Menu.Item>
        <Menu.Item key="_mailbox" icon={<MailOutlined />}>
          Letters
        </Menu.Item>
        <Menu.Item key="_character" icon={<UserOutlined />}>
          My Character
        </Menu.Item>
        <Menu.Item key="sign out" icon={<ImportOutlined />}>
          Sign out
        </Menu.Item>
        <Menu.Item key="_support" icon={<QuestionCircleOutlined />}>
          Request Support
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideNav;
