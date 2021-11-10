import React, { useState } from 'react';
import { Layout, Card, Typography, Row, Col } from 'antd';
import { ChooseAvatarProps } from './types';
import { avatarUrls } from './dummyConstants';
import './chooseavatar.css';

const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

function ChooseAvatar(props: ChooseAvatarProps): React.ReactElement {
  const { user, ...rest } = props;
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    user.selectedAvatar
  );

  return (
    <Content className="choose-avatar-container" {...rest}>
      <Row>
        <Col span={24}>
          <Title> Choose your Avatar </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="choose-avatar-col">
          {Array.from(avatarUrls.entries()).map((entry) => (
            <Card
              hoverable
              cover={<img alt="profile avatar" src={entry[1]} />}
              className={
                selectedAvatar === entry[0]
                  ? 'avatar-card-selected'
                  : 'avatar-card'
              }
              onClick={() => {
                setSelectedAvatar(entry[0]);
              }}
              key={entry[0]}
            >
              <Meta title={entry[0]} />
            </Card>
          ))}
        </Col>
      </Row>
    </Content>
  );
}

export default ChooseAvatar;
