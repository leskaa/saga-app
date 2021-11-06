import React, { useState } from 'react';
import { MapSlideComponentProps } from './types';
import './mapslide.css'


function MapSlide(props: MapSlideComponentProps): React.ReactElement {

    const { unit } = props;

    return (
        <div className="map-slide-container">
            {unit.name}
            <h3>
                {unit.description}
            </h3>
        </div>
    );

};

export default MapSlide;