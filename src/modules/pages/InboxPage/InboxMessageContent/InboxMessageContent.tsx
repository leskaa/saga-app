import React from 'react';
import { Card, Typography, Layout, Row, Col, Divider, Avatar } from 'antd';
import { InboxMessageContentProps } from './types';
import { dateOptions } from '../../../root/constants';

import './inboxmessagecontent.css';

const { Content } = Layout;
const { Text } = Typography;
function InboxMessageContent(
  props: InboxMessageContentProps
): React.ReactElement {
  const { message } = props;

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
              <Text>{message.sender}</Text>
            </Col>
            <Col span={5}>
              <Text>{message.createdAt.toString()}</Text>
            </Col>
          </Row>
          <Row style={{ paddingTop: '2%' }}>
            <Col span={3}>
              <Text>Subject:</Text>
            </Col>
            <Col span={21}>
              <Text>{message.subject}</Text>
            </Col>
          </Row>
        </Col>
        <Col span={2}>
          <Avatar
            alt="profile avatar"
            src="https://drive.google.com/uc?export=view&id=1ncNCMDOFzx1MH4HyBStHfHJoqYOfxngq"
            style={{ width: '4em', height: '4em' }}
          />
        </Col>
      </Row>
      <Row>
        <Divider />
        <Text>{message ? message.content : 'No message selected'}</Text>
      </Row>
    </Content>
  );
}

export default InboxMessageContent;
