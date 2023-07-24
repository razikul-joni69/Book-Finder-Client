import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import auth from "../configs/firebase.config";
import { useAppDispatch } from "../redux/hooks";
import { setLoading, setUser } from "../redux/user/userSlice";

const Layout = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser(user));
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false));
            }
        });
    }, [dispatch]);

    return (
        <div className="max-w-[1920px] mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};
export default Layout;
