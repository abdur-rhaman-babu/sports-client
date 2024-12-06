import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Mainlayout = () => {
  const navigation = useNavigation();
  return (
    <div className="dark:bg-black dark:text-white">
      <Navbar />
      <div className="max-w-7xl mx-5 lg:mx-auto pt-20 min-h-[80vh] dark:bg-black dark:text-white">
        {navigation.state === "loading" ? (
          <div className="flex items-center justify-center h-[80vh]"><span className="loading loading-spinner loading-lg"></span></div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
