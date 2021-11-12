import React, { useContext, useState, useCallback } from 'react';
import { Layout, Row, Col, Typography, AutoComplete } from 'antd';
import { GlobalContext } from '../../root/GlobalStore';
import { Message } from '../../general/types';
import { dummyStudent, dummyMessages } from '../../general/dummyData';
import InboxTable from './InboxTable';
import InboxMessageContent from './InboxMessageContent';
import './inboxpage.css';

const { Content } = Layout;
const { Title } = Typography;

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
      console.log('This would delete message');
    },
    [userMessages]
  );

  return (
    <Content className="inbox-page-container">
      <Row>
        <Title className="title" style={{ margin: 'auto', padding: '3%' }}>
          MailBox
        </Title>
      </Row>
      <Row className="inbox-page-row">
        <Col span={1} />
        <Col
          span={8}
          style={{ background: 'white', height: '100%', overflow: 'scroll' }}
        >
          <InboxTable
            messages={userMessages}
            selectedMessage={selectedMessage}
            handleDeleteClick={deleteMessage}
            handleRowClick={(message) => setSelectedMessage(message)}
          />
        </Col>
        <Col span={1} />
        <Col
          span={14}
          style={{
            background: 'white',
            height: '100%',
            overflow: 'scroll',
            padding: '1.5%',
          }}
        >
          <InboxMessageContent message={selectedMessage} />
        </Col>
        <Col span={1} />
      </Row>
    </Content>
  );
}

export default InboxPage;
