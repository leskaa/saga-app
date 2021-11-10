import React, { useCallback, useContext } from 'react';
import { Calendar, Layout, Badge, Row, Col, Typography } from 'antd';
import { PresetStatusColorType } from 'antd/lib/_util/colors.d';
import { GlobalContext } from '../../root/GlobalStore';
import { User } from '../../general/types';
import './mycalendarpage.css';

const { Content } = Layout;
const { Title } = Typography;
function MyCalendarPage(): React.ReactElement {
  const { globalState } = useContext(GlobalContext);
  const user = globalState.loggedInUser as User;

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

    return listData || [];
  }, []);

  const dateCellRender = useCallback((value) => {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as PresetStatusColorType}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  }, []);

  return (
    <Content>
      <Content className="calendar-page-container">
        <Row className="name-row">
          <Col span={24}>
            <Typography>
              <Title>{`${user.name}'s Quest Board`}</Title>
            </Typography>
          </Col>
        </Row>
        <Row className="calendar-row">
          <Col span={24}>
            <Calendar dateCellRender={dateCellRender} className="calendar" />
          </Col>
        </Row>
      </Content>
    </Content>
  );
}

export default MyCalendarPage;
