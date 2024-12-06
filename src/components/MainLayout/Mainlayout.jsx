import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Mainlayout = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <Navbar />
      <div className="max-w-7xl mx-5 lg:mx-auto pt-20 min-h-[58vh] dark:bg-black dark:text-white">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Mainlayout;
