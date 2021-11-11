import React, { useCallback, useContext } from 'react';
import { Calendar, Layout, Badge, Row, Col, Typography, List } from 'antd';
import { PresetStatusColorType } from 'antd/lib/_util/colors.d';
import Item from 'antd/lib/list/Item';
import { GlobalContext } from '../../root/GlobalStore';
import { User } from '../../general/types';
import './mycalendarpage.css';

const { Content } = Layout;
const { Title, Text } = Typography;
function MyCalendarPage(): React.ReactElement {
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser as User;

  const courseData = [
    'Adventure Name 1',
    'Adventure Name 2',
    'Adventure Name 3',
  ];

  const getListData = useCallback((value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
  }, []);

  return (
    <Content className="calendar-page-container">
      <Row className="name-row">
        <Col span={24}>
          <Typography>
            <Title className="title">{`${user.name}'s Quest Board`}</Title>
          </Typography>
        </Col>
      </Row>
      <Row className="calendar-row">
        <Col span={2} />
        <Col span={9}>
          <Calendar
            fullscreen={false}
            className="calendar"
            dateFullCellRender={(current) => {
              const style = {
                border: '',
                height: '8vh',
                width: '8vh',
                marginLeft: '2vh',
                paddingTop: '2vh',
                fontSize: '1.3em',
              };
              if (current.date() === 10 || current.date() === 15) {
                style.border = '1px solid #000000';
              }
              return (
                <div className="ant-picker-cell-inner" style={style}>
                  {current.date()}
                </div>
              );
            }}
          />
        </Col>
        <Col span={2} />
        <Col span={9}>
          <Title className="title" level={3}>
            November 1st, 2021
          </Title>
          <List
            dataSource={courseData}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text style={{ fontWeight: 'bold' }}>
                  {' '}
                  {item}{' '}
                </Typography.Text>
                .
                <List size="small">
                  <List.Item style={{ padding: 0 }}>
                    Assignment 1 Name
                  </List.Item>
                  <List.Item style={{ padding: 0 }}>
                    Assignment 2 Name
                  </List.Item>
                </List>
              </List.Item>
            )}
          />
        </Col>
        <Col span={2} />
      </Row>
    </Content>
  );
}

export default MyCalendarPage;
