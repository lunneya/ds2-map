import MapContainer from './components/MapContainer.jsx';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from "./routes.jsx";

function App() {
  return (
        <BrowserRouter>
            <div className='App'>
                <AppRoutes />
            </div>
        </BrowserRouter>
  );
}

export default App;
