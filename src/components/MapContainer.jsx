import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import {useState, useEffect, useRef} from 'react';
import { locations } from '../data/locations.js';
import LocationMarker from "./LocationMarker.jsx";

import mapImage from './../assets/ds2-map.jpg';

function MapContainer() {

    const [mapImg, setMapImg] = useState(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [scale, setScale] = useState(1);
    const containerRef = useRef(null);

    useEffect(() => {
        const image = new window.Image();
        image.src = mapImage;
        image.onload = () => setMapImg(image);
    }, []);

    useEffect(() => {
        function updateSize() {
            if (containerRef.current && mapImg) {
                const width = containerRef.current.offsetWidth;
                const height = containerRef.current.offsetHeight;

                const scaleX = width / mapImg.width;
                const scaleY = height / mapImg.height;

                setScale(Math.max(scaleX, scaleY));
                setContainerSize({ width, height });
            }
        }

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);

    }, [mapImg]);

    return (
        //todo вынести стили в модули
        <div ref={containerRef} className='map-wrapper' style={{ width: '100%', height: '100vh' }}>
            {mapImg && (
                <Stage width={containerSize.width} height={containerSize.height}>
                    <Layer>
                        <KonvaImage
                            image={mapImg}
                            x={0}
                            y={0}
                            scaleX={scale}
                            scaleY={scale}
                        />
                        {locations.map((loc) => (
                            <LocationMarker
                                key={loc.id}
                                loc={{
                                    ...loc,
                                    x: loc.x * scale,
                                    y: loc.y * scale,
                                }}
                            />
                        ))}
                    </Layer>
                </Stage>
            )}
        </div>
    );
}

export default MapContainer;