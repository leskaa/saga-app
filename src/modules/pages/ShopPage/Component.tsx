import React, { useContext, useEffect, useState } from 'react';
import {
  Typography,
  Layout,
  Row,
  Col,
  Statistic,
  Space,
  Avatar,
  Spin,
  message,
} from 'antd';
import { StarOutlined } from '@ant-design/icons';
import AvatarCard from './AvatarCard';
import { Avatar as AvatarObject, User } from '../../general/types';
import { GlobalContext } from '../../root/GlobalStore';

const { Title } = Typography;
const { Content } = Layout;

function ShopPage(): React.ReactElement {
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser as User;
  const [purchasableAvatars, setPurchasableAvatar] = useState<AvatarObject[]>(
    []
  );
  const [allAvatars, setAllAvatars] = useState<AvatarObject[]>([]);
  const [ownedAvatars, setOwnedAvatars] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const populateStore = () => {
    const avatarList = allAvatars.filter((element: any) => {
      return !ownedAvatars.includes(element.id);
    });
    setPurchasableAvatar(avatarList);
    setLoading(false);
  };

  async function getAvatars() {
    await fetch('https://saga-learn.herokuapp.com/avatars', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          message.error('Something went wrong.', 10);
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((response) => {
        setAllAvatars(response);
      })
      .catch((err) => console.error(err));

    await fetch('https://saga-learn.herokuapp.com/ownedAvatars', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          message.error('Something went wrong.', 10);
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((response) => {
        setOwnedAvatars(response.map((e: AvatarObject) => e.id));
      })
      .catch((err) => console.error(err));

    await populateStore();
  }

  useEffect(() => {
    getAvatars();
  }, [loading]);

  if (loading) {
    return <Spin size="default" />;
  }

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
            src={user.selectedAvatar}
            style={{ width: '7em', height: '7em' }}
          />
        </Col>
        <Col span={2} />
      </Row>
      <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
        <Space
          size="large"
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {purchasableAvatars.map((avatar: AvatarObject) => (
            <AvatarCard avatar={avatar} user={user} />
          ))}
        </Space>
      </Row>
    </Content>
  );
}

export default ShopPage;
