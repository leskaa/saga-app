import React from 'react';
import { Layout, Card, Typography, Row, Col, Spin } from 'antd';
import useSWR from 'swr';
import { ChooseAvatarProps } from './types';
import './chooseavatar.css';
import { apiEndpoint } from '../../../root/constants';
import { Avatar } from '../../../general/types';

const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

function ChooseAvatar(props: ChooseAvatarProps): React.ReactElement {
  const { user, ...rest } = props;
  const { data, error } = useSWR(`${apiEndpoint}/ownedAvatars`);

  const changeAvatar = (avatarUrl: string) => {
    fetch('https://saga-learn.herokuapp.com/changeAvatar', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: avatarUrl,
      }),
      credentials: 'include',
    })
      .then((res) => {
        console.log('Success');
      })
      .catch((err) => console.error(err));
  };

  if (data === undefined) {
    return <Spin size="default" />;
  }

  return (
    <Content className="choose-avatar-container" {...rest}>
      <Row>
        <Col span={24}>
          <Title className="title"> Choose your Avatar </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="choose-avatar-col">
          {Array.from(
            data.map((avatar: Avatar) => (
              <Card
                hoverable
                cover={<img alt="profile avatar" src={avatar.url} />}
                className={
                  user.selectedAvatar === avatar.url
                    ? 'avatar-card-selected'
                    : 'avatar-card'
                }
                onClick={() => {
                  changeAvatar(avatar.url);
                }}
                key={avatar.name}
              >
                <Meta title={avatar.name} />
              </Card>
            ))
          )}
        </Col>
      </Row>
    </Content>
  );
}

export default ChooseAvatar;
