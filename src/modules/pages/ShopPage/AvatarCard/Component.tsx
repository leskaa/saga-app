import React from 'react';
import { Typography, Card, Button, Statistic } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import userEvent from '@testing-library/user-event';
import { AvatarCardInfoProps } from './types';

const { Text, Title } = Typography;
const { Meta } = Card;

function AvatarCard(props: AvatarCardInfoProps): React.ReactElement {
  const { avatar, user } = props;

  const onClickBuy = () => {
    console.log('clicked');
  };

  return (
    <Card
      hoverable
      style={{ width: 250, paddingTop: '8%' }}
      cover={<img alt={avatar.name} src={avatar.url} />}
    >
      <Meta title={avatar.name} style={{ paddingBottom: '2%' }} />
      <Statistic
        value={avatar.cost}
        prefix={<StarOutlined />}
        style={{ paddingBottom: '2%' }}
      />
      <Button
        disabled={user.stars <= avatar.cost}
        type="primary"
        style={{ width: '100%' }}
        onClick={onClickBuy}
      >
        Buy
      </Button>
    </Card>
  );
}

export default AvatarCard;
