import React from 'react';
import { MapSlideComponentProps } from './types';
import { Row, Col, Typography, Layout, Button} from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import './mapslide.css'

const { Title, Text} = Typography;

function MapSlide(props: MapSlideComponentProps): React.ReactElement {

    const { unit, onNextSlide, onPreviousSlide } = props;

    return (
        <Layout className="map-slide-container">
            <Row style={{height: "100%"}}>
                <Col span = {1} style={{display: "flex", justifyContent:"flex-start", verticalAlign:"center"}}>
                    {onPreviousSlide && (<Button className="navigate-button" type="default" icon={<LeftOutlined />} onClick={onPreviousSlide} />) }
                </Col>
                <Col span = {22} className="main-slide-content">
                    <Title>
                        {unit.name}
                    </Title>
                    <Text>
                        {unit.description}
                    </Text>
                </Col>
                <Col span = {1} style={{display: "flex", justifyContent:"flex-end", verticalAlign:"center"}}>
                    {onNextSlide && (<Button className="navigate-button" type="default" icon={<RightOutlined />} onClick={onNextSlide} />) }
                </Col>
            </Row>
        </Layout>
    );

};

export default MapSlide;