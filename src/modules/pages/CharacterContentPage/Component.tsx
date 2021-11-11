import React, { useContext } from 'react';
import { Layout, Tabs, Row, Card, Col } from 'antd';
import { CharacterContentPageProps } from './types';
import CharacterInfo from './CharacterInfo';
import ChooseAvatar from './ChooseAvatar';
import { GlobalContext } from '../../root/GlobalStore';
import { dummyStudent } from '../../general/dummyData';
import { avatarUrls } from './ChooseAvatar/dummyConstants';

import './charactercontentpage.css';

const { Content } = Layout;
const { TabPane } = Tabs;
const { Meta } = Card;

function CharacterContentPage(
  props: CharacterContentPageProps
): React.ReactElement {
  const { defaultTab, ...rest } = props;
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser ?? dummyStudent;

  return (
    <Content className="character-content-container" {...rest}>
      <Row className="profile-row">
        <Col span={24} className="profile-col">
          <Card
            hoverable
            cover={
              <img
                alt="profile avatar"
                src={avatarUrls.get(user.selectedAvatar)}
              />
            }
            className="profile-card"
          >
            <Meta title={user.name} />
          </Card>
        </Col>
      </Row>
      <Row className="content-row">
        <Col span={24} className="content-col">
          <Tabs defaultActiveKey={defaultTab} centered>
            <TabPane forceRender tab="Character Info" key="1">
              <CharacterInfo user={user} />
            </TabPane>
            <TabPane forceRender tab="Choose Avatar" key="2">
              <ChooseAvatar user={user} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </Content>
  );
}

export default CharacterContentPage;
