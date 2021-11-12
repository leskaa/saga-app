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
        <Col span={3}>
          <Text>From:</Text>
        </Col>
        <Col span={16}>
          <Text>{message.sender}</Text>
          <Avatar
            alt="profile avatar"
            src="https://drive.google.com/uc?export=view&id=1351Sn0NN6refchUXVrMx6AXL-oyR5lMT"
            style={{ width: '3em' }}
          />
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
      <Row>
        <Divider />
        <Text>{message ? message.content : 'No message selected'}</Text>
      </Row>
    </Content>
  );
}

export default InboxMessageContent;
