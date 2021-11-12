import React, { useCallback, useState } from 'react';
import { Row, Col, Layout, Button, Popover, Typography, Rate } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { MapSlideComponentProps, Coordinates } from './types';
import { assignmentCoordinates } from './constants';
import { dummyAssignments } from '../../../../general/dummyData';
import './mapslide.css';

const { Content } = Layout;
const { Text } = Typography;

const cols = 24;
const rows = 20;

function MapSlide(props: MapSlideComponentProps): React.ReactElement {
  const { onNextSlide, onPreviousSlide } = props;
  const assignments = dummyAssignments;

  const coordinateList: Coordinates[] =
    assignmentCoordinates.get(assignments.length) ?? [];

  const checkIsCoordinate = (x: number, y: number): number => {
    const coordinate: Coordinates = { x, y };
    const isCoordinate = coordinateList.findIndex(
      (item) => item.x === coordinate.x && item.y === coordinate.y
    );
    return isCoordinate;
  };

  const handleOnClick = useCallback((index: number) => {
    console.log(`ASSIGNMENT ${index + 1} at index ${index} was clicked!`);
  }, []);

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

              return (
                <Col span={1} className="inner-grid-col">
                  {assignmentCoordinateIndex >= 0 && (
                    <Popover
                      title={assignments[assignmentCoordinateIndex].name}
                      content={
                        <Rate
                          disabled
                          defaultValue={4}
                          style={{ color: '#ff7875' }}
                        />
                      }
                      style={{ width: '20px' }}
                    >
                      <Button
                        shape="circle"
                        type="default"
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
