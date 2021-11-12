import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
import useSWR from 'swr';
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
import MapSlide from './MapSlideComponent/Component';
import './map.css';
import { apiEndpoint } from '../../../root/constants';
import {
  convertResponseDataToAssignmentArray,
  convertResponseDataToUnitArray,
  convertResponseDataToSubmissionArray,
} from '../../../general/utils';
import { Assignment, Unit, Submission } from '../../../general/types';

const { Title, Text } = Typography;

const { Content } = Layout;

function MapPage(): React.ReactElement {
  const carouselRef = React.createRef<any>();
  const { courseId } = useParams();

  const [currentUnitIndex, setCurrentUnitIndex] = useState<number>(0);
  const [units, setUnits] = useState<Unit[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const { data: unitsData } = useSWR(
    `${apiEndpoint}/courses/${courseId}/units`,
    {}
  );
  const { data: assignmentsData } = useSWR(
    () => `${apiEndpoint}/unitAssignments/${unitsData[currentUnitIndex].id}`
  );
  const { data: submissionsData } = useSWR(
    () =>
      `${apiEndpoint}/unitStudentSubmissions/${unitsData[currentUnitIndex].id}`
  );

  const goNextSlide = useCallback(() => {
    carouselRef.current.next();
    setCurrentUnitIndex(currentUnitIndex + 1);
  }, [carouselRef, currentUnitIndex]);

  const goPreviousSlide = useCallback(() => {
    carouselRef.current.prev();
    setCurrentUnitIndex(currentUnitIndex - 1);
  }, [carouselRef, currentUnitIndex]);

  useEffect(() => {
    if (unitsData !== undefined)
      setUnits(convertResponseDataToUnitArray(unitsData));
  }, [unitsData]);

  useEffect(() => {
    if (assignmentsData !== undefined)
      setAssignments(convertResponseDataToAssignmentArray(assignmentsData));
  }, [assignmentsData]);

  useEffect(() => {
    if (submissionsData !== undefined)
      setSubmissions(convertResponseDataToSubmissionArray(submissionsData));
  }, [submissionsData]);

  if (
    unitsData === undefined ||
    assignmentsData === undefined ||
    submissionsData === undefined
  ) {
    return <Spin />;
  }

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
            <b>{units?.[currentUnitIndex].name}</b> -
            {units?.[currentUnitIndex].description} <br />
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
                    index !== 0 ? () => goPreviousSlide() : void 0
                  }
                  onNextSlide={
                    index !== units.length - 1 ? () => goNextSlide() : void 0
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
