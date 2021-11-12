import React from 'react';
import { Typography, Layout, Row, Col, Statistic, Space, Avatar } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import AvatarCard from './AvatarCard';
import { Avatar as AvatarObject, User } from '../../general/types';

const { Text, Title } = Typography;
const { Content } = Layout;

function ShopPage(): React.ReactElement {
  const user = {
    id: 4,
    name: 'Frodo Baggins',
    email: 'frodo.baggins@fellowship.edu',
    pronouns: 'He/Him',
    isTeacher: true,
    stars: 56,
    selectedAvatar: 'Blue',
    createdAt: new Date('11-05-2021'),
    updatedAt: new Date('11-06-2021'),
    attendingCourses: [],
  };
  const avatars: AvatarObject[] = [
    {
      id: 1,
      name: 'Blue',
      url: 'https://drive.google.com/uc?export=view&id=1ncNCMDOFzx1MH4HyBStHfHJoqYOfxngq',
      cost: 35,
      createdAt: new Date('11-05-2021'),
      updatedAt: new Date('11-05-2021'),
    },
    {
      id: 2,
      name: 'Cat',
      url: 'https://drive.google.com/uc?export=view&id=1VhUoLpsH9L5emU2WrfKd-8D1ZbldxeJw',
      cost: 50,
      createdAt: new Date('11-05-2021'),
      updatedAt: new Date('11-05-2021'),
    },
    {
      id: 3,
      name: 'Cow',
      url: 'https://drive.google.com/uc?export=view&id=1szEZ6OQ1mD5i9Pr7PpmGhuI4M6hlR3W3',
      cost: 60,
      createdAt: new Date('11-05-2021'),
      updatedAt: new Date('11-05-2021'),
    },
    {
      id: 4,
      name: 'Dog',
      url: 'https://drive.google.com/uc?export=view&id=1jpnKx6bRcz_zCBGzAF2LNvJVm8aji4cv',
      cost: 50,
      createdAt: new Date('11-05-2021'),
      updatedAt: new Date('11-05-2021'),
    },
    {
      id: 5,
      name: 'Giraffe',
      url: 'https://drive.google.com/uc?export=view&id=1QAhTBA6kMAwgw7r9_MXRMbWEUeB0TPNr',
      cost: 60,
      createdAt: new Date('11-05-2021'),
      updatedAt: new Date('11-05-2021'),
    },
  ];

  return (
    <Content className="container">
      <Row>
        <Title className="title" style={{ margin: 'auto', padding: '3%' }}>
          Shop
        </Title>
      </Row>
      <Row style={{ paddingBottom: '2%' }}>
        <Col span={19} />
        <Col span={2}>
          <Statistic
            title="My Stars"
            value={user.stars}
            prefix={<StarOutlined />}
          />
        </Col>
        <Col span={1}>
          <Avatar
            alt="profile avatar"
            src="https://drive.google.com/uc?export=view&id=1ncNCMDOFzx1MH4HyBStHfHJoqYOfxngq"
            style={{ width: '5em', height: '5em' }}
          />
        </Col>
        <Col span={2} />
      </Row>
      <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
        <Space
          size="large"
          style={{
            display: 'flex',
            overflow: 'scroll',
          }}
        >
          {avatars.map((avatar: AvatarObject) => (
            <AvatarCard avatar={avatar} user={user} />
          ))}
        </Space>
      </Row>
    </Content>
  );
}

export default ShopPage;
