import React, { useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router';

import {
  Row,
  Col,
  Carousel,
  Layout,
  Typography,
  Progress,
  Statistic,
  Spin,
} from 'antd';
import { StarOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import MapSlide from './MapSlideComponent/Component';
import './map.css';
import { apiEndpoint } from '../../../root/constants';
import {
  convertResponseDataToAssignmentArray,
  convertResponseDataToUnitArray,
  convertResponseDataToSubmissionArray,
} from '../../../general/utils';
import { Assignment, Unit, Submission } from '../../../general/types';
import {
  dummySubmissions,
  dummyAssignments,
  dummyUnits,
  getdummyAssignments,
} from '../../../general/dummyData';

const { Title, Text } = Typography;

const { Content } = Layout;

// const units = dummyUnits;

function MapPage(): React.ReactElement {
  const carouselRef = React.createRef<any>();
  const { courseId } = useParams();
  // grab units from course

  // TODO: FIX THESE CALLS and add undefined stuff
  const { data: unitsData } = useSWR(
    `${apiEndpoint}/courses/${courseId}/units`
  );
  const { data: assignmentsData } = useSWR(
    () => `${apiEndpoint}/unitAssignments/${unitsData[0].id}/units`
  );

  const { data: submissionsData } = useSWR(
    () => `${apiEndpoint}/unitStudentAssignments/${unitsData[0].id}`
  );
  console.log('unitsData: ', unitsData);
  console.log('assignmentsData: ', assignmentsData);
  console.log('submissionsData: ', submissionsData);

  const units = convertResponseDataToUnitArray(unitsData ?? []);

  const [currentUnit, setCurrentUnit] = useState<Unit>(units?.[0]);

  // grab assignments from CurrentUnit

  const assignments = dummyAssignments;
  const submissions = dummySubmissions;

  const goNextSlide = useCallback(
    (unit: Unit) => {
      carouselRef.current.next();
      setCurrentUnit(unit);
    },
    [carouselRef, currentUnit]
  );

  const goPreviousSlide = useCallback(
    (unit: Unit) => {
      carouselRef.current.prev();
      setCurrentUnit(unit);
    },
    [carouselRef, currentUnit]
  );

  /*
  if (unitsData === undefined) {
    return <Spin size="large" />;
  }
*/
  return (
    <Content className="container" style={{ height: '116%' }}>
      <Row>
        <Col span={1} />
        <Col span={15}>
          <Title className="title" level={3}>
            <br />
            Course Name
            <br />
          </Title>
          <Text>
            <b>{currentUnit?.name}</b> - {currentUnit?.description} <br />
            <br />
          </Text>
        </Col>
        <Col span={7}>
          <br />
          <Row>
            <Col span={8}>
              <Statistic
                title="My Stars"
                value={56}
                prefix={<StarOutlined />}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Class Stars"
                value={986}
                prefix={<StarOutlined />}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Class Goal"
                value={1500}
                prefix={<StarOutlined />}
              />
            </Col>
          </Row>
          <Row style={{ paddingRight: '5%' }}>
            <Progress
              strokeColor={{ '0%': '#FFF1B8', '100%': '#FF7875' }}
              percent={65.7}
            />
          </Row>
        </Col>
        <Col span={1} />
      </Row>
      <Row>
        <Col span={1} />
        <Col span={22}>
          <Carousel
            ref={carouselRef}
            infinite={false}
            style={{ height: '100vh' }}
          >
            {units.map((unit: Unit, index: number) => {
              return (
                <MapSlide
                  unit={unit}
                  assignments={assignments}
                  submissions={submissions}
                  onPreviousSlide={
                    index !== 0
                      ? () => goPreviousSlide(units[index - 1])
                      : void 0
                  }
                  onNextSlide={
                    index !== units.length - 1
                      ? () => goNextSlide(units[index + 1])
                      : void 0
                  }
                />
              );
            })}
          </Carousel>
        </Col>
        <Col span={1} />
      </Row>
    </Content>
  );
}

export default MapPage;
