import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router';

import {
  Row,
  Col,
  Carousel,
  Layout,
  Typography,
  Progress,
  Statistic,
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

const units = dummyUnits;

function MapPage(): React.ReactElement {
  const carouselRef = React.createRef<any>();
  const { courseId } = useParams();

  const getData = (endpoint: string) => {
    try {
      const { data } = useSWR(`${apiEndpoint}/${endpoint}`);
      return { data };
    } catch (error) {
      console.log('error: ', error);
      throw error;
    }
  };

  // grab units from course
  /*
  const { data: dataUnits } = getData(`/courses/${courseId}/units`);

  const units = convertResponseDataToUnitArray(dataUnits);
  */

  console.log(dummyUnits);

  const [currentUnit, setCurrentUnit] = useState<Unit>(units[0]);

  // grab assignments from CurrentUnit
  /*
  const getAssignments = useCallback((): Assignment[] => {
    const { data: dataAssignments } = getData(
      `/unitAssignments/${currentUnit.id}`
    );
    const assignments = convertResponseDataToAssignmentArray(dataAssignments);
    return assignments;
  }, [currentUnit]);

  const getSubmissions = useCallback((): Submission[] => {
    const { data: dataSubmissions } = getData(
      `/unitStudentAssignments/${currentUnit.id}`
    );
    const submissions = convertResponseDataToSubmissionArray(dataSubmissions);
    return submissions;
  }, [currentUnit]);
  */

  const submissions = dummySubmissions;
  const assignments = dummyAssignments;

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
            <b>{currentUnit.name}</b> - {currentUnit.description} <br /> <br />
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
