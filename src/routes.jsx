import {Route, Routes} from "react-router-dom";
import App from "./App.jsx";
import Home from './pages/Home.jsx';
import MapContainer from "./components/MapContainer.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/map' element={<MapContainer />} />
        </Routes>
    );
}

export default AppRoutes;