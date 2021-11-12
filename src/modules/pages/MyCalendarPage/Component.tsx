import React, { useCallback, useContext, useState } from 'react';
import moment, { Moment } from 'moment';
import {
  Calendar,
  Layout,
  Badge,
  Row,
  Col,
  Typography,
  List,
  Spin,
} from 'antd';
import { PresetStatusColorType } from 'antd/lib/_util/colors.d';
import Item from 'antd/lib/list/Item';
import useSWR from 'swr';
import { GlobalContext } from '../../root/GlobalStore';
import { User } from '../../general/types';
import './mycalendarpage.css';
import { apiEndpoint } from '../../root/constants';

const { Content } = Layout;
const { Title, Text } = Typography;
function MyCalendarPage(): React.ReactElement {
  const { globalState } = useContext(GlobalContext);
  const { data, error } = useSWR(`${apiEndpoint}/relatedAssignments`);
  const user = globalState.loggedInUser as User;
  const [selectedDate, setSelectedDate] = useState<Moment>(moment());
  const [currentAssignments, setCurrentAssignments] = useState<any[]>(data);

  const handleSelectedDate = useCallback(
    (value: Moment) => {
      setSelectedDate(value);
      console.log(value);
      const assignments = data.filter((element: any) => {
        const elementDate = element.due_date.split('T')[0];
        if (selectedDate.format().split('T')[0] === elementDate) {
          return true;
        }
        return false;
      });
      setCurrentAssignments(assignments);
    },
    [selectedDate]
  );

  if (data === undefined) {
    return <Spin size="default" />;
  }
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
            onSelect={handleSelectedDate}
            className="calendar"
            dateFullCellRender={(current) => {
              const style = {
                border: '',
                height: '8vh',
                width: '92%',
                marginLeft: '2vh',
                paddingTop: '2vh',
                fontSize: '1.3em',
              };
              data.forEach((element: any) => {
                const dateLong = element.due_date.split('T')[0];
                const date = dateLong.split('-');
                if (
                  current.date().toString() === date[2] &&
                  (current.month() + 1).toString() === date[1] &&
                  current.year().toString() === date[0]
                ) {
                  style.border = '1px solid #000000';
                }
              });
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
            {selectedDate.format('LL')}
          </Title>
          <List
            dataSource={currentAssignments}
            renderItem={(assignment: any) => (
              <List.Item>
                <Typography.Text style={{ fontWeight: 'bold' }}>
                  {' '}
                  {assignment.name}{' '}
                </Typography.Text>{' '}
                <List size="small">
                  <List.Item style={{ padding: 0 }}>
                    {assignment.content.replace(/<[^>]+>/g, '')}
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
