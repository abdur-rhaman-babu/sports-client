import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-5 lg:mx-auto mt-20 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;
