import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import PopularProduct from "../../components/PopularProduct/PopularProduct";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      <div>
        <Banner />
        <div>
          <h1 className="text-center font-bold text-3xl my-5">Our Products</h1>
          <p className="text-center my-5">
            Welcome to our website. Here you can get any sports accssories
            easily. Have you nice visit. <br /> You can buy any product for
            online.{" "}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
        <Category />
        <PopularProduct />
      </div>
    </div>
  );
};

export default Home;
