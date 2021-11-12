import React, { useState } from 'react';
import { Typography, Layout, Row, Col, Divider, Avatar, Spin } from 'antd';
import moment from 'moment';
import { InboxMessageContentProps } from './types';
import { dateOptions } from '../../../root/constants';

import './inboxmessagecontent.css';
import { User } from '../../../general/types';

const { Content } = Layout;
const { Text } = Typography;
function InboxMessageContent(
  props: InboxMessageContentProps
): React.ReactElement {
  const { message } = props;

  if (!message) {
    return <Spin size="default" />;
  }

  return (
    // <Card
    //   title={message.subject}
    //   extra={
    //     <Typography>
    //       <Text>
    //         {message
    //           ? `${message.sender} at ${message.createdAt.toLocaleDateString(
    //               'en-US',
    //               dateOptions
    //             )}`
    //           : ''}
    //       </Text>
    //     </Typography>
    //   }
    //   className="inbox-message-container"
    // >
    //   <Typography>
    //     <Text>{message ? message.content : 'No message selected'}</Text>
    //   </Typography>
    // </Card>

    <Content className="inbox-message-container">
      <Row>
        <Col span={22}>
          <Row>
            <Col span={3}>
              <Text>From:</Text>
            </Col>
            <Col span={16}>
              <Text>{message.sender.name}</Text>
            </Col>
            <Col span={5}>
              <Text>
                {moment.parseZone(message.message.created_at).format('L')}
              </Text>
            </Col>
          </Row>
          <Row style={{ paddingTop: '2%' }}>
            <Col span={3}>
              <Text>Subject:</Text>
            </Col>
            <Col span={21}>
              <Text>{message.message.subject}</Text>
            </Col>
          </Row>
        </Col>
        <Col span={2}>
          <Avatar
            alt="profile avatar"
            src={message.sender.selected_avatar_url}
            style={{ width: '4em', height: '4em' }}
          />
        </Col>
      </Row>
      <Row>
        <Divider />
        <Text>{message ? message.message.content : 'No message selected'}</Text>
      </Row>
    </Content>
  );
}

export default InboxMessageContent;
