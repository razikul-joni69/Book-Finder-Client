import { NavLink } from "react-router-dom";
import BooksCard from "../components/BooksCard/BooksCard";
import HeroSection from "../components/HeroSection/HeroSection";
import Titles from "../components/Titles/Titles";
import { useGetBooksQuery } from "../redux/api/apiSlice";

const Home = () => {
    const { data } = useGetBooksQuery(undefined);

    return (
        <div className="dark:bg-slate-800">
            <HeroSection />
            <Titles
                title="Popular Books"
                subTitle="Find all of your favorite books here"
            />
            <BooksCard books={data?.slice(0, 6)} />
            <NavLink className="flex justify-center pb-10" to="/all-books">
                <button
                    className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                >
                    See All Books
                </button>
            </NavLink>
        </div>
    );
};
export default Home;
