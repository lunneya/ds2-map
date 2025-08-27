import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import { useState, useEffect } from 'react';
import { locations } from '../data/locations.js';
import LocationMarker from "./LocationMarker.jsx";

import mapImage from './../assets/ds2-map.jpg';

function MapContainer() {

    const [mapImg, setMapImg] = useState(null);

    useEffect(() => {
        const image = new window.Image();
        image.src = mapImage;
        image.onload = () => setMapImg(image);
    }, []);

    return (
        <div className='map-wrapper'>
            <Stage width={1920} height={1280}>
                <Layer>
                    {mapImg && <KonvaImage image={mapImg} width={1000} height={700}/>}
                    {locations.map((loc) => (
                        <LocationMarker key={loc.id} loc={loc} />
                    ))}
                </Layer>
            </Stage>
        </div>
    );
}

export default MapContainer;