import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import PopularProduct from "../../components/PopularProduct/PopularProduct";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopularProduct/>
        </div>
    );
};

export default Home;