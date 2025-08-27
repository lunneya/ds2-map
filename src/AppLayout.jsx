import Sidebar from './components/sidebar/Sidebar.jsx';
import {Outlet} from "react-router-dom";

function AppLayout() {
    return (
        <div className='app-layout'>
            <Sidebar />
            <main className='app-main'>
                <Outlet />
            </main>
        </div>
    );
}

export default AppLayout;