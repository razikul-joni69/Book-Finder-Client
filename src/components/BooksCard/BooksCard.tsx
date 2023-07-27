/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useAddToWishlistMutation } from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hooks";
import {
    showErrorMessage,
    showSuccessMessage,
    showWarning,
} from "../../utils/NotifyToast";
// import axios from "axios";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import useGetCurrentUser from "../../hooks/useGetCurrentUser";
// import { AuthContext } from "../../providers/AuthProvider";
// import { showErrorMessage, showSuccessMessage } from "../../utils/Notification";
// import Loading from "../Loading/Loading";

const BooksCard = (data: []) => {
    const { user } = useAppSelector((state) => state.user);

    const [
        addToWishlist,
        {
            isError: isWishlistError,
            isSuccess: isWishlistSuccess,
            error: wishlistError,
            data: response,
        },
    ] = useAddToWishlistMutation();

    if (response?.statusCode === 200) {
        showSuccessMessage(response?.message);
    } else if (response?.statusCode === 409) {
        showWarning(response?.message);
    } else if (isWishlistError) {
        showErrorMessage(wishlistError?.message);
    }

    const handleCart = (book: object, cart: string) => {
        const options = {
            email: user?.email,
            book: { book },
            cart,
        };
        addToWishlist(options);
    };

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
                                    className={`text-md font-bold  truncate dark:text-white`}
                                >
                                    {book.author_name}{" "}
                                    <span className="p-3 bg-white dark:bg-black rounded-full text-black dark:text-white ">
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
                            <Link to={`/book/${book._id}`} className="relative">
                                <img
                                    className="w-full rounded-t-lg h-60"
                                    src={book?.img}
                                    alt="product image"
                                />
                            </Link>
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
                                <Button
                                    onClick={() =>
                                        handleCart(book, "readinglist")
                                    }
                                    type="primary"
                                    className="bg-blue-500"
                                >
                                    Add To Reading List
                                </Button>
                                <Button
                                    onClick={() => handleCart(book, "wishlist")}
                                    type="primary"
                                    className="bg-blue-500"
                                >
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
