import HeroSection from "../components/HeroSection/HeroSection";
import { useGetBooksQuery } from "../redux/api/apiSlice";

const Home = () => {

    const {data}  = useGetBooksQuery(undefined)
    console.log(data);
    
    return (
        <div>
            <HeroSection />
        </div>
    );
};
export default Home;
