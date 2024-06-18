import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
    <div>
        <div>
            <ul>
                <li><Link to=".">Home</Link></li>
                <li><Link to="/tasks">Profile</Link></li>
            </ul>
        </div>
        <Outlet />
    </div>
)

export default Layout;