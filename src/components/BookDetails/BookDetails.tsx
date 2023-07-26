import { Rating } from "@smastrom/react-rating";
import { BsFillSendCheckFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
    useGetBookByIdQuery,
    usePostReviewMutation,
} from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hooks";
import { showErrorMessage, showSuccessMessage } from "../../utils/NotifyToast";
import Loading from "../Loading/Loading";
import Titles from "../Titles/Titles";

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading } = useGetBookByIdQuery(id);
    const { user } = useAppSelector((state) => state.user);
    const [postReview, { isError, isSuccess, error }] = usePostReviewMutation();

    let book = {};
    if (data) {
        book = data[0];
    }

    if (isError) {
        showErrorMessage(error?.message);
    }
    if (isSuccess) {
        showSuccessMessage("Review Submitted!");
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!user?.email) {
            Swal.fire({
                title: "Are you sure you want to login?",
                text: "You have to login or register to leave a comment.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login");
                }
            });
        } else {
            const comment = e.target.comment.value;
            const options = {
                id,
                review: { comment },
            };
            postReview(options);
            e.target.reset();
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="dark:bg-slate-800 py-10">
            <Titles
                title={`${book?.book_name} Book Details`}
                subTitle="All About your chossen book."
            />
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto max-h-[500px] h-64 object-cover object-center rounded"
                            src={book?.img}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
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
                            <h2 className="text-sm title-font text-gray-500 dark:text-white tracking-widest">
                                BOOK NAME
                            </h2>
                            <h1 className="text-gray-900 dark:text-white text-3xl title-font font-medium mb-1">
                                {book?.book_name}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <Rating
                                        style={{ maxWidth: 130 }}
                                        value={Math.random() * 3 + 2}
                                        readOnly
                                    />
                                    <span className="text-gray-600 dark:text-white ml-3">
                                        {book?.reviews.length} Reviews
                                    </span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500 dark:text-white">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500 dark:text-white">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500 dark:text-white">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed dark:text-white">
                                {book?.description}
                            </p>
                            <div className=" pb-5 border-b-2 border-gray-100 mb-5"></div>
                            <div className="flex justify-between">
                                <button className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Added To Reading List
                                </button>
                                <button className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Added To Wishlist
                                </button>
                            </div>
                            {user.email === book.author_email && (
                                <div className="flex justify-between my-3">
                                    <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                        Edit Book
                                    </button>
                                    <button className="flex  text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded">
                                        Delete Book
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-10">
                <Titles title="Reviews" subTitle="Users Reviews" />
                <form
                    onSubmit={handleCommentSubmit}
                    className="flex gap-5 items-center justify-center"
                    action=""
                >
                    <textarea
                        name="comment"
                        id=""
                        className="w-1/2 rounded-full p-1 px-3"
                        placeholder="Share your experience"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#4f46e5] h-16 w-16 rounded-full text-[35px] text-white flex items-center justify-center"
                    >
                        <BsFillSendCheckFill />
                    </button>
                </form>
            </div>
        </div>
    );
};
export default BookDetails;
