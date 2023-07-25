import BooksCard from "../components/BooksCard/BooksCard";
import { useGetBooksQuery } from "../redux/api/apiSlice";

const AllBooks = () => {
    const { data } = useGetBooksQuery(undefined);
    return (
        <div>
            <BooksCard books={data} />
        </div>
    );
};
export default AllBooks;