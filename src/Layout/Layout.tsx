import { Outlet } from "react-router-dom";
import App from "../App";

const Layout = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <App />
            <Outlet />
        </div>
    );
};
export default Layout;
