import React, { useState, useCallback } from 'react';
import {
  Row,
  Col,
  Carousel,
  Layout,
  Typography,
  Progress,
  Statistic,
} from 'antd';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import useSWR from 'swr';
import { Unit } from './MapSlideComponent/types';
import MapSlide from './MapSlideComponent/Component';
import './map.css';
import { apiEndpoint } from '../../../root/constants';

const courseId = 5;
const units: Unit[] = [
  {
    id: '1',
    name: 'Unit 1',
    description: 'lorem ipsum for unit 1',
    courseId: 1,
    mapId: 1,
  },
  {
    id: '2',
    name: 'Unit 2',
    description: 'lorem ipsum for unit 2',
    courseId: 1,
    mapId: 1,
  },
  {
    id: '3',
    name: 'Unit 3',
    description: 'lorem ipsum for unit 3',
    courseId: 1,
    mapId: 1,
  },
];

const { Title, Text } = Typography;

const { Content } = Layout;

function MapPage(): React.ReactElement {
  const carouselRef = React.createRef<any>();

  const [currentUnit, setCurrentUnit] = useState<Unit>(units[0]);

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
