import React from 'react';
import { MapSlideComponentProps } from './types';
import { Row, Col, Typography, Layout, Button} from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import './mapslide.css'

const { Content } = Layout;

function MapSlide(props: MapSlideComponentProps): React.ReactElement {

    const {onNextSlide, onPreviousSlide } = props;

    return (
        <Row style={{height: "100%"}}>
            <Col span = {2} style={{display: "flex", justifyContent:"flex-start", verticalAlign:"center"}}>
            {onPreviousSlide && (<Button className="navigate-button" type="default" icon={<LeftOutlined />} onClick={onPreviousSlide} />) }
            </Col>
            <Col className="map-slide-container" span = {20} />

            <Col span = {2} style={{display: "flex", justifyContent:"flex-end", verticalAlign:"center"}}>
                    {onNextSlide && (<Button className="navigate-button" type="default" icon={<RightOutlined />} onClick={onNextSlide} />) }
            </Col>
        </Row>
    );

};

export default MapSlide;