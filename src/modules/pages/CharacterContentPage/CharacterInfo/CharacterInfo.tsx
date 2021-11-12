import React, { useState } from 'react';
import { Descriptions, Layout, Button } from 'antd';
import { CharacterInfoProps } from './types';
import EditCharacterModal from './EditCharacterModal';
import './characterinfo.css';

const { Content } = Layout;
function CharacterInfo(props: CharacterInfoProps): React.ReactElement {
  const { user } = props;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <Content className="character-info-container">
      <Descriptions
        title="Character Info"
        bordered
        extra={
          <Button
            type="primary"
            className="description-container"
            onClick={() => setIsModalVisible(true)}
          >
            {' '}
            Edit{' '}
          </Button>
        }
      >
        <Descriptions.Item span={5} label="Name">
          {user.name}
        </Descriptions.Item>
        <Descriptions.Item span={5} label="Pronouns">
          {user.pronouns}
        </Descriptions.Item>
        <Descriptions.Item span={5} label="Email">
          {user.email}
        </Descriptions.Item>
        <Descriptions.Item span={5} label="Total Stars">
          {user.stars}
        </Descriptions.Item>
      </Descriptions>
      {isModalVisible && (
        <EditCharacterModal
          user={user}
          visible={isModalVisible}
          setVisible={setIsModalVisible}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}
        />
      )}
    </Content>
  );
}

export default CharacterInfo;
