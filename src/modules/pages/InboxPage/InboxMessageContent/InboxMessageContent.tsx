import React from 'react';
import { Card, Typography } from 'antd';
import { InboxMessageContentProps } from './types';
import { dateOptions } from '../../../root/constants';

import './inboxmessagecontent.css';

const { Text } = Typography;
function InboxMessageContent(
  props: InboxMessageContentProps
): React.ReactElement {
  const { message } = props;

  return (
    <Card
      title={message.subject}
      extra={
        <Typography>
          <Text>
            {message
              ? `${message.sender} at ${message.createdAt.toLocaleDateString(
                  'en-US',
                  dateOptions
                )}`
              : ''}
          </Text>
        </Typography>
      }
      className="inbox-message-container"
    >
      <Typography>
        <Text>{message ? message.content : 'No message selected'}</Text>
      </Typography>
    </Card>
  );
}

export default InboxMessageContent;
