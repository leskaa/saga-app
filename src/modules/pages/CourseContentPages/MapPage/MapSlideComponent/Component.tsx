import React, { useCallback, useEffect, useState } from 'react';
import { Row, Col, Button, Popover, Rate, Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { MapSlideComponentProps, Coordinates } from './types';
import { assignmentCoordinates } from './constants';
import './mapslide.css';

const cols = 24;
const rows = 20;

const { Text } = Typography;

function MapSlide(props: MapSlideComponentProps): React.ReactElement {
  const {
    onNextSlide,
    onPreviousSlide,
    assignments,
    closestToDoAssignment,
    getHasSubmission,
    mapUrl,
  } = props;
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
      <Col
        span={20}
        style={{
          backgroundImage: `url(${mapUrl})`,
          backgroundSize: '100% 100%',
          height: '80vh',
          width: '100%',
        }}
      >
        {[...Array(rows)].map((value, yIndex) => (
          <Row className="inner-grid-row">
            {[...Array(cols)].map((value2, xIndex) => {
              const assignmentCoordinateIndex = checkIsCoordinate(
                xIndex,
                yIndex
              );

              const assignment = assignments[assignmentCoordinateIndex];
              const isNextDue = closestToDoAssignment?.id === assignment?.id;
              const hasSubmission = getHasSubmission(assignment?.id);

              return (
                <Col span={1} className="inner-grid-col">
                  {assignmentCoordinateIndex >= 0 && (
                    <Popover
                      zIndex={10}
                      title={assignment.name}
                      content={
                        hasSubmission && hasSubmission?.grade ? (
                          <Rate
                            disabled
                            defaultValue={hasSubmission?.grade ?? 0}
                            style={{ color: '#FF7875' }}
                          />
                        ) : (
                          <Text style={{ color: '#B4B5B7' }}>Ungraded</Text>
                        )
                      }
                      style={{ width: '20px' }}
                    >
                      <Button
                        shape="circle"
                        type={hasSubmission ? 'primary' : 'default'}
                        size="large"
                        className={isNextDue ? 'blob' : 'assignment-button'}
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
