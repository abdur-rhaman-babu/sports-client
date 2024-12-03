import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-5 lg:mx-auto mt-20 min-h-[58vh]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Mainlayout;
