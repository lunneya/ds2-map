import { Circle, Text } from 'react-konva';
import { useNavigate } from 'react-router-dom';

function LocationMarker({ loc }) {
    const navigate = useNavigate();

    return (
        <>
            {/*<Circle*/}
            {/*    x={loc.x}*/}
            {/*    y={loc.y}*/}
            {/*    radius={10}*/}
            {/*    fill='red'*/}
            {/*    onClick={() => navigate(`/location/${loc.id}`)}*/}
            {/*/>*/}
            {/*<Text*/}
            {/*    x={loc.x + 15}*/}
            {/*    y={loc.y - 10}*/}
            {/*    text={loc.name}*/}
            {/*    fontSize={14}*/}
            {/*    fill='white'*/}
            {/*/>*/}
        </>
    );
}

export default LocationMarker;