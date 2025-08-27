import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import MapContainer from './components/MapContainer.jsx';
import AppLayout from './AppLayout.jsx';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<AppLayout />} >
                <Route path='/' element={<Home />} />
                <Route path='/map' element={<MapContainer />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;