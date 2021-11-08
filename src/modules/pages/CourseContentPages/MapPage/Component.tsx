import React, { useCallback } from 'react';
import { Carousel } from 'antd';
import { Unit } from './MapSlideComponent/types'
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

    const carouselRef = React.createRef<any>();;

    const goNextSlide = useCallback(() => {
        carouselRef.current.next();
    }, [carouselRef]);

    const goPreviousSlide = useCallback(() => {
        carouselRef.current.prev();

    }, [carouselRef]);

    return (
        <Carousel ref={carouselRef} draggable infinite={false} style={{ height: '100vh' }}>
            {units.map((unit, index) => {
                return (
                    <MapSlide unit={unit} onPreviousSlide={index !== 0 ? goPreviousSlide : void 0} onNextSlide={index !== units.length-1 ? goNextSlide : void 0} />
                );
            })}
        </Carousel>
    );

};

export default MapPage;