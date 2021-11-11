import React from 'react';
import { Row, Col, Typography, Layout, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { MapSlideComponentProps } from './types';

import './mapslide.css';

const { Content } = Layout;

function MapSlide(props: MapSlideComponentProps): React.ReactElement {
  const { onNextSlide, onPreviousSlide } = props;

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
      <Col className="map-slide-container" span={20} />

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
