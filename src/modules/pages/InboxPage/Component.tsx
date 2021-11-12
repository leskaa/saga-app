import React, { useContext, useState, useCallback, useEffect } from 'react';
import {
  Layout,
  Row,
  Col,
  Typography,
  AutoComplete,
  message,
  Spin,
} from 'antd';
import { GlobalContext } from '../../root/GlobalStore';
import { Message, User } from '../../general/types';
import { dummyStudent } from '../../general/dummyData';
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
  const [userMessages, setUserMessages] = useState<any[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<any>(userMessages[0]);
  const [loading, setLoading] = useState<boolean>(true);

  async function getMessages() {
    await fetch('https://saga-learn.herokuapp.com/messages', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
        setUserMessages(response);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }

  // const findSender = (msg: Message) => {
  //   console.log(senderList);
  //   const sender = senderList.filter((element) => {
  //     return element.id.toString() === msg.sender;
  //   })[0];

  //   return sender;
  // };

  useEffect(() => {
    getMessages();
  }, []);

  if (loading) {
    return <Spin size="default" />;
  }

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
            selectedMessage={selectedMessage}
            handleRowClick={(msg) => {
              setSelectedMessage(msg);
            }}
            messages={userMessages}
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
