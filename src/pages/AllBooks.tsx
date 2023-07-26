import BooksCard from "../components/BooksCard/BooksCard";
import Titles from "../components/Titles/Titles";
import { useGetBooksQuery } from "../redux/api/apiSlice";

const AllBooks = () => {
    const { data } = useGetBooksQuery(undefined);
    return (
        <div className="py-10 dark:bg-slate-800">
            <Titles title="All Books" subTitle="Find all of your favorite books here" />
            <BooksCard books={data} />
        </div>
    );
};
export default AllBooks;