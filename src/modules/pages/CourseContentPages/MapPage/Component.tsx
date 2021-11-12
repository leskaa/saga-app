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
  Popover,
} from 'antd';
import { StarOutlined } from '@ant-design/icons';
import MapSlide from './MapSlideComponent/Component';
import './map.css';
import { apiEndpoint } from '../../../root/constants';
import {
  convertResponseDataToUnitArray,
  convertResponseDataToCourse,
  convertResponseDataToMapArray,
  convertResponseDataToAssignmentSubmissionPairArray,
} from '../../../general/utils';
import {
  Assignment,
  Unit,
  Submission,
  Course,
  Map,
  AssignmentSubmissionPair,
} from '../../../general/types';
import StudentGradesPage from '../../StudentGradesPage';

const { Title, Text } = Typography;

const { Content } = Layout;

function MapPage(): React.ReactElement {
  const carouselRef = React.createRef<any>();
  const { courseId } = useParams();

  const [course, setCourse] = useState<Course>();
  const [currentUnitIndex, setCurrentUnitIndex] = useState<number>(0);
  const [units, setUnits] = useState<Unit[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const [maps, setMaps] = useState<Map[]>([]);
  const [mapUrls, setMapUrls] = useState<string[]>([]);
  const [closestDueToDoAssignment, setClosestDueToDoAssignment] =
    useState<Assignment>();

  const [userStars, setUserStars] = useState<number>(0);

  const { data: courseData } = useSWR(`${apiEndpoint}/courses/${courseId}`);
  const { data: mapsData } = useSWR(`${apiEndpoint}/maps`);
  const { data: unitsData } = useSWR(
    `${apiEndpoint}/courses/${courseId}/units`
  );

  const { data: assignmentsAndSubmissionsData } = useSWR(
    () =>
      `${apiEndpoint}/unitStudentSubmissions/${unitsData[currentUnitIndex]?.id}`
  );

  const goNextSlide = useCallback(() => {
    carouselRef.current.next();

    setCurrentUnitIndex(currentUnitIndex + 1);
  }, [carouselRef, currentUnitIndex]);

  const goPreviousSlide = useCallback(() => {
    carouselRef.current.prev();
    setCurrentUnitIndex(currentUnitIndex - 1);
  }, [carouselRef, setCurrentUnitIndex, currentUnitIndex]);

  const getAssignmentHasSubmission = useCallback(
    (id: number) => {
      return submissions.find((submission) => submission.assignmentId === id);
    },
    [submissions]
  );

  useEffect(() => {
    if (mapsData !== undefined) {
      setMaps(convertResponseDataToMapArray(mapsData));
    }
  }, [mapsData]);

  useEffect(() => {
    if (courseData !== undefined) {
      setCourse(convertResponseDataToCourse(courseData));
    }
  }, [courseData]);

  useEffect(() => {
    if (unitsData !== undefined)
      setUnits(convertResponseDataToUnitArray(unitsData));
  }, [unitsData]);

  useEffect(() => {
    if (units && maps) {
      setMapUrls(
        units.map(
          (unit: Unit) =>
            maps.find((map: Map) => map.id === unit?.map)?.url ?? ''
        )
      );
    }
  }, [maps, units]);

  useEffect(() => {
    if (assignmentsAndSubmissionsData !== undefined) {
      const tempAssignments: Assignment[] = [];
      const tempSubmissions: Submission[] = [];
      const assignmentSubmissionPairs =
        convertResponseDataToAssignmentSubmissionPairArray(
          assignmentsAndSubmissionsData
        );

      assignmentSubmissionPairs.forEach((pair: AssignmentSubmissionPair) => {
        tempAssignments.push(pair.assignment);
        const length = pair?.submission?.length || 0;
        if (length > 0) {
          tempSubmissions.push(pair.submission[length - 1]);
        }
      });
      setAssignments(tempAssignments);
      setSubmissions(tempSubmissions);
    }
  }, [assignmentsAndSubmissionsData]);

  useEffect(() => {
    const closestToDo = assignments.find((d) => {
      const currentTime = new Date().valueOf();
      return (
        currentTime <= d.dueDate.valueOf() && !getAssignmentHasSubmission(d.id)
      );
    });

    setClosestDueToDoAssignment(closestToDo);
  }, [
    submissions,
    assignments,
    assignmentsAndSubmissionsData,
    closestDueToDoAssignment,
  ]);

  useEffect(() => {
    let tempCount = 0;
    submissions.forEach((submission) => {
      if (submission?.grade) {
        tempCount += submission.grade;
      }
      setUserStars(tempCount);
    });
  }, [submissions]);

  if (
    unitsData === undefined ||
    assignmentsAndSubmissionsData === undefined ||
    units.length === 0 ||
    assignments.length === 0 ||
    mapUrls.length === 0
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
            {course?.name}
            <br />
          </Title>
          <Text>
            <b>{units?.[currentUnitIndex]?.name}</b> {' - '}
            {units?.[currentUnitIndex]?.description} <br />
            <br />
          </Text>
        </Col>
        <Col span={7}>
          <br />
          <Row>
            <Col span={8}>
              <Statistic
                title="My Stars"
                value={userStars}
                prefix={<StarOutlined />}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="Class Stars"
                value={course?.totalStars}
                prefix={<StarOutlined />}
              />
            </Col>
            <Col span={8}>
              {course?.prize && (
                <Statistic
                  title="Class Goal"
                  value={course?.starGoal}
                  prefix={<StarOutlined />}
                />
              )}
            </Col>
          </Row>
          <Row style={{ paddingRight: '5%' }}>
            {course?.prize && (
              <Popover
                zIndex={10}
                title={course.prize}
                style={{ width: '20px' }}
              >
                <Progress
                  strokeColor={{ '0%': '#FFF1B8', '100%': '#FF7875' }}
                  percent={course.totalStars / course?.starGoal}
                  trailColor="#b4b5b7"
                />
              </Popover>
            )}
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
            {units.map((unit: Unit, index) => {
              return (
                <MapSlide
                  key={unit.id}
                  unit={unit}
                  assignments={assignments}
                  submissions={submissions}
                  mapUrl={mapUrls[currentUnitIndex]}
                  onPreviousSlide={
                    currentUnitIndex > 0 ? () => goPreviousSlide() : void 0
                  }
                  onNextSlide={
                    currentUnitIndex <= units.length - 2
                      ? () => goNextSlide()
                      : void 0
                  }
                  closestToDoAssignment={closestDueToDoAssignment}
                  getHasSubmission={getAssignmentHasSubmission}
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
