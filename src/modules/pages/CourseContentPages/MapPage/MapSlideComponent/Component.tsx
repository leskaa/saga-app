import React, { useCallback, useMemo } from 'react';
import { Row, Col, Button, Popover, Rate } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { MapSlideComponentProps, Coordinates } from './types';
import { assignmentCoordinates } from './constants';
import './mapslide.css';

const cols = 24;
const rows = 20;

function MapSlide(props: MapSlideComponentProps): React.ReactElement {
  const { onNextSlide, onPreviousSlide, assignments, submissions } = props;
  const navigate = useNavigate();

  const coordinateList: Coordinates[] =
    assignmentCoordinates.get(assignments.length) ?? [];

  const checkIsCoordinate = (x: number, y: number): number => {
    const coordinate: Coordinates = { x, y };
    const isCoordinate = coordinateList.findIndex(
      (item) => item.x === coordinate.x && item.y === coordinate.y
    );
    return isCoordinate;
  };

  const getAssignmentHasSubmission = useCallback(
    (id: number) => {
      return submissions.find((submission) => submission.assignmentId === id);
    },
    [submissions]
  );

  const sortedAssignments = useMemo(() => {
    const tempSortedAssignments = assignments.sort((a, b) => {
      return a.dueDate.valueOf() - b.dueDate.valueOf();
    });

    return tempSortedAssignments;
  }, [assignments]);

  const closestDueAssignment = useMemo(() => {
    const currentTime = new Date().valueOf();

    const afterDates = sortedAssignments.filter((d) => {
      return (
        currentTime <= d.dueDate.valueOf() && !getAssignmentHasSubmission(d.id)
      );
    });

    return afterDates?.[0];
  }, [sortedAssignments]);

  const handleOnClick = useCallback(
    (index: number) => {
      const { id } = assignments[index];
      navigate(`/quest/${id}`);
    },
    [assignments]
  );

  return (
    <Row style={{ height: '100%' }}>
      <Col
        span={2}
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          verticalAlign: 'center',
        }}
      >
        {onPreviousSlide && (
          <Button
            className="navigate-button"
            type="default"
            icon={<LeftOutlined />}
            onClick={onPreviousSlide}
          />
        )}
        {!onPreviousSlide && (
          <Button
            disabled
            className="navigate-button"
            type="default"
            icon={<LeftOutlined />}
          />
        )}
      </Col>
      <Col className="map-slide-container" span={20}>
        {[...Array(rows)].map((value, yIndex) => (
          <Row className="inner-grid-row">
            {[...Array(cols)].map((value2, xIndex) => {
              const assignmentCoordinateIndex = checkIsCoordinate(
                xIndex,
                yIndex
              );

              const assignment = assignments[assignmentCoordinateIndex];
              const isNextDue = closestDueAssignment?.id === assignment?.id;
              const hasSubmission = getAssignmentHasSubmission(assignment?.id);

              return (
                <Col span={1} className="inner-grid-col">
                  {assignmentCoordinateIndex >= 0 && (
                    <Popover
                      title={
                        isNextDue
                          ? `${assignment.name} IS DUE NEXT`
                          : assignment.name
                      }
                      visible={isNextDue ? true : void 0}
                      content={
                        <Rate
                          disabled
                          defaultValue={
                            hasSubmission ? hasSubmission?.grade : void 0
                          }
                          style={{ color: '#FF7875' }}
                        />
                      }
                      style={{ width: '20px' }}
                    >
                      <Button
                        shape="circle"
                        type={hasSubmission ? 'primary' : 'default'}
                        size="large"
                        className="assignment-button"
                        onClick={() => handleOnClick(assignmentCoordinateIndex)}
                      >
                        {assignmentCoordinateIndex + 1}
                      </Button>
                    </Popover>
                  )}
                </Col>
              );
            })}
          </Row>
        ))}
      </Col>
      <Col
        span={2}
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          verticalAlign: 'center',
        }}
      >
        {onNextSlide && (
          <Button
            className="navigate-button"
            type="default"
            icon={<RightOutlined />}
            onClick={onNextSlide}
          />
        )}
        {!onNextSlide && (
          <Button
            disabled
            className="navigate-button"
            type="default"
            icon={<RightOutlined />}
          />
        )}
      </Col>
    </Row>
  );
}

export default MapSlide;
