import React, { useContext, useState, useCallback } from 'react';
import { Layout, Row, Col } from 'antd';
import { GlobalContext } from '../../root/GlobalStore';
import { Message } from '../../general/types';
import { dummyStudent, dummyMessages } from '../../general/dummyData';
import InboxTable from './InboxTable';
import InboxMessageContent from './InboxMessageContent';
import './inboxpage.css';

const { Content } = Layout;

function InboxPage(): React.ReactElement {
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser ?? dummyStudent;

  // TODO: change to get user's list of messages
  // const userMessages: Message[] = dummyMessages;
  const [userMessages, setUserMessages] = useState<Message[]>(dummyMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message>(
    userMessages[0]
  );

  const deleteMessage = useCallback(
    (message: Message) => {
      console.log('asfdsf');
    },
    [userMessages]
  );

  return (
    <Content className="inbox-page-container">
      <Row className="inbox-page-row">
        <Col span={8}>
          <InboxTable
            messages={userMessages}
            selectedMessage={selectedMessage}
            handleDeleteClick={deleteMessage}
            handleRowClick={(message) => setSelectedMessage(message)}
          />
        </Col>
        <Col span={16}>
          <InboxMessageContent message={selectedMessage} />
        </Col>
      </Row>
    </Content>
  );
}

export default InboxPage;
