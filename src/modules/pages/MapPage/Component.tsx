import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Radio, Carousel, Image } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { NavigateToRoute } from "../../root/utils";
import { nextTick } from 'process';
import { Unit, MapSlideComponentProps } from './MapSlideComponent/types'
import MapSlide from './MapSlideComponent/Component'
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

function MapPage(): React.ReactElement {
    const navigate = useNavigate();

    function NavigateToRoute(path: string) {
        navigate(path);
    }


    function onChange(a: number) {
        console.log(a);
    }

    const contentStyle = {
        height: '100vh',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center' as const,
        background: 'no-repeat center url("https://drive.google.com/uc?export=view&id=1Ly46o2fj5OQxf8-BtqPzDwSTyFUKJ-RD")',
    };

    {/* <Button type="text" icon={<LeftOutlined />} onClick={() => carouselRef.current.prev()} />
<Button type="text" icon={<RightOutlined />} onClick={() => carouselRef.current.next()} /> */}

    const carouselRef = React.createRef<any>();;

    return (
        <Carousel afterChange={onChange} ref={carouselRef} draggable infinite={false} style={{ height: '100vh' }}>
            {units.map((unit) => {
                return (

                    <MapSlide unit={unit} />

                );
            })}
        </Carousel>
    );

};

export default MapPage;