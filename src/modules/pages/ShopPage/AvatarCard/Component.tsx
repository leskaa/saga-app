import React from 'react';
import { Card, Button, Statistic, message } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { AvatarCardInfoProps } from './types';

const { Meta } = Card;

function AvatarCard(props: AvatarCardInfoProps): React.ReactElement {
  const { avatar, user } = props;

  const onClickBuy = () => {
    console.log(avatar);
    fetch('https://saga-learn.herokuapp.com/purchaseAvatar', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: avatar.url,
      }),
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
        user.stars -= avatar.cost;
      })
      .catch((err) => console.error(err));
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
        disabled={user.stars < avatar.cost}
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
