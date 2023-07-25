/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import { Button } from "antd";
// import axios from "axios";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import useGetCurrentUser from "../../hooks/useGetCurrentUser";
// import { AuthContext } from "../../providers/AuthProvider";
// import { showErrorMessage, showSuccessMessage } from "../../utils/Notification";
// import Loading from "../Loading/Loading";

const BooksCard = (data: []) => {
    console.log(data);

    // const { user, loading } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const [dbCurrentUser, dbCurrentUserLoading] = useGetCurrentUser();

    // if (loading || dbCurrentUserLoading) {
    //     return <Loading />;
    // }

    // const handleSaveToCart = async (book) => {
    //     if (!user) {
    //         Swal.fire({
    //             title: "Are you sure You Want To Login?",
    //             text: "You have to login/ register for add to cart.",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonColor: "#3085d6",
    //             cancelButtonColor: "#d33",
    //             confirmButtonText: "Yes, Login!",
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 navigate("/login");
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: "Navigated to Login!",
    //                     showConfirmButton: false,
    //                     timer: 1500,
    //                 });
    //             }
    //         });
    //     } else {
    //         if (!(dbCurrentUser?.role === "student")) {
    //             Swal.fire({
    //                 title: "You can not Enroll!",
    //                 text: "Only Student can Enroll Classes!",
    //                 icon: "warning",
    //             });
    //         } else if (user && dbCurrentUser?.role === "student") {
    //             const cartData = {
    //                 student_email: user?.email,
    //                 selected_classes: [book],
    //                 enrolled_classes: [],
    //             };
    //             await axios
    //                 .get(
    //                     `https://melody-institute-server.vercel.app/api/v1/cart/${user?.email}`
    //                 )
    //                 .then((res) => {
    //                     if (res?.data?.length) {
    //                         const oldClasses = res?.data[0]?.selected_classes;
    //                         const oldClasses2 = res?.data[0]?.enrolled_classes;
    //                         const updateCartData = {
    //                             classes: [...oldClasses, book],
    //                         };
    //                         const exist = oldClasses.find(
    //                             (oldbook) => oldbook._id === book._id
    //                         );
    //                         const exist2 = oldClasses2.find(
    //                             (oldbook) => oldbook._id === book._id
    //                         );
    //                         if (!exist && !exist2) {
    //                             axios
    //                                 .patch(
    //                                     `https://melody-institute-server.vercel.app/api/v1/cart/${user?.email}?class_type=selected`,
    //                                     updateCartData
    //                                 )
    //                                 .then((res) => {
    //                                     if (
    //                                         res?.data?.lastErrorObject
    //                                             ?.updatedExisting
    //                                     ) {
    //                                         showSuccessMessage(
    //                                             "👍 Class Added to cart!"
    //                                         );
    //                                         refetch();
    //                                     }
    //                                 })
    //                                 .catch((err) => {
    //                                     showErrorMessage(err.message);
    //                                 });
    //                         } else {
    //                             if (exist) {
    //                                 showErrorMessage(
    //                                     "Class already added to your cart!"
    //                                 );
    //                             }
    //                             if (exist2) {
    //                                 showErrorMessage(
    //                                     "You already enrolled to this class!"
    //                                 );
    //                             }
    //                         }
    //                     } else {
    //                         axios
    //                             .post(
    //                                 `https://melody-institute-server.vercel.app/api/v1/cart/`,
    //                                 cartData
    //                             )
    //                             .then((res) => {
    //                                 if (res?.data?.insertedId) {
    //                                     showSuccessMessage(
    //                                         "👍 Class Added to cart!"
    //                                     );
    //                                     refetch();
    //                                 }
    //                             })
    //                             .catch((err) => {
    //                                 showErrorMessage(err.message);
    //                             });
    //                     }
    //                 })
    //                 .catch((err) => {
    //                     showErrorMessage(err.message);
    //                 });
    //         }
    //     }
    // };

    // if (dbAllClassesLoading) {
    //     return <Loading />;
    // }

    return (
        <div className="my-10">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center">
                {data?.books?.map((book) => (
                    <div
                        key={book._id}
                        className={`w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5`}
                    >
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img
                                    className="rounded-full w-14 h-14"
                                    src={book?.author_img}
                                    alt="Bonnie image"
                                />
                            </div>
                            <div className={`flex-1 min-w-0`}>
                                <p
                                    className={`text-md font-bold ${
                                        book?.available_seats > 0
                                            ? "text-gray-900"
                                            : "text-white"
                                    }  truncate dark:text-white`}
                                >
                                    {book.author_name}{" "}
                                    <span className="badge dark:badge-accent dark:text-white ">
                                        Author
                                    </span>
                                </p>
                                <p
                                    className={`text-sm truncate dark:text-gray-400`}
                                >
                                    {book?.author_email}
                                </p>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="relative">
                            <a className="relative" href="#">
                                <img
                                    className="w-full rounded-t-lg h-60"
                                    src={book?.img}
                                    alt="product image"
                                />
                            </a>
                        </div>
                        <hr className="my-4" />
                        <div className="space-y-2">
                            <div
                                className={` text-xl font-semibold tracking-tight dark:text-white`}
                            >
                                <h4>Book Name: {book?.book_name}</h4>
                                <h4>Book Genre: {book?.genre}</h4>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-300">
                                {book?.description?.slice(0, 100)}
                            </div>
                            <div className="flex space-x-2">
                                <Rating
                                    style={{ maxWidth: 130 }}
                                    value={Math.random() * 3 + 2}
                                    readOnly
                                />
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
                                    {book?.reviews.length}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                {/* 
                                <button
                                    onClick={() => handleSaveToCart(book)}
                                    className=""
                                    danger
                                >
                                    {book?.available_seats > 0
                                        ? "Add to Cart"
                                        : "Class Booked"}
                                </button> */}
                                <Button type="primary" className="bg-blue-500">
                                    Add To Reading List
                                </Button>
                                <Button type="primary" className="bg-blue-500">
                                    Add To WishList
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksCard;
