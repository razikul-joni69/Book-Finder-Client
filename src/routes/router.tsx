import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddBooks from "../components/AddBooks/AddBooks";
import AllBooks from "../pages/AllBooks";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BookDetails from "../components/BookDetails/BookDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/all-books",
                element: <AllBooks />,
            },
            {
                path: "/book/:id",
                element: <BookDetails />,
            },
            {
                path: "/add-books",
                element: <AddBooks />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;
