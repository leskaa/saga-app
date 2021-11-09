import React, { useCallback } from 'react';
import { Row, Col, Carousel, Layout, Typography, Progress, Statistic } from 'antd';
import { Unit } from './MapSlideComponent/types'
import MapSlide from './MapSlideComponent/Component'
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import "./map.css";

const units: Unit[] = [
    {
        id: "1",
        name: "Unit 1",
        description: "lorem ipsum for unit 1",
        courseId: 1,
        mapId: 1
    },
    {
        id: "2",
        name: "Unit 2",
        description: "lorem ipsum for unit 2",
        courseId: 1,
        mapId: 1
    },
    {
        id: "3",
        name: "Unit 3",
        description: "lorem ipsum for unit 3",
        courseId: 1,
        mapId: 1
    },
];

const { Title, Text} = Typography;

const { Content } = Layout;

function MapPage(): React.ReactElement {

    const carouselRef = React.createRef<any>();;

    const goNextSlide = useCallback(() => {
        carouselRef.current.next();
    }, [carouselRef]);

    const goPreviousSlide = useCallback(() => {
        carouselRef.current.prev();

    }, [carouselRef]);

    return (
        <Content>
            <Row>
                <Col span = {1}/>
                <Col span = {15}>
                    <Text>
                        <br/>Course Name<br />
                        Unit Name <br />
                        Unit Description.... bLah bLah bLah <br /> <br/>
                    </Text>
                </Col>
                <Col span = {7}>
                    <br/>
                    <Row>
                        <Col span = {8}>
                            <Statistic title="My Stars" value={56} prefix={<StarOutlined/>}/>
                        </Col>
                        <Col span = {8}>
                            <Statistic title="Class Stars" value={986} prefix={<StarOutlined/>}/>
                        </Col>
                        <Col span = {8}>
                            <Statistic title="Class Goal" value={1500} prefix={<StarOutlined/>}/>
                        </Col>
                    </Row>
                    <Row style={{paddingRight: "5%"}}>
                        <Progress strokeColor={{'0%': '#FFF1B8','100%': '#FF7875'}} percent={65.7}/>  
                    </Row>
                </Col>
                <Col span = {1}/>
            </Row>
            <Row>
                <Col span = {1} />
                <Col span = {22}>
                    <Carousel ref={carouselRef} infinite={false} style={{ height: '100vh' }}>
                    {units.map((unit, index) => {
                        return (
                            <MapSlide unit={unit} onPreviousSlide={index !== 0 ? goPreviousSlide : void 0} onNextSlide={index !== units.length-1 ? goNextSlide : void 0}/>
                        );
                    })}
                    </Carousel>
                </Col>
                <Col span = {1} />
            </Row>
            </Content>
    );

};

export default MapPage;