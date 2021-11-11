import React, { useCallback } from 'react';
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
const units = useSWR(`${apiEndpoint}/courses/${courseId}/units`)?.data;

const { Title, Text } = Typography;

const { Content } = Layout;

function MapPage(): React.ReactElement {
  const carouselRef = React.createRef<any>();

  const goNextSlide = useCallback(() => {
    carouselRef.current.next();
  }, [carouselRef]);

  const goPreviousSlide = useCallback(() => {
    carouselRef.current.prev();
  }, [carouselRef]);

  return (
    <Content>
      <Row>
        <Col span={1} />
        <Col span={15}>
          <Text>
            <br />
            Course Name
            <br />
            Unit Name <br />
            Unit Description.... bLah bLah bLah <br /> <br />
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
                  onPreviousSlide={index !== 0 ? goPreviousSlide : void 0}
                  onNextSlide={
                    index !== units.length - 1 ? goNextSlide : void 0
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
