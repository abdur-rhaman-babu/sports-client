import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/MainLayout/Mainlayout";
import Home from "../Pages/Home/Home";
import AllSports from "../Pages/AllSports/AllSports";
import AddEquip from "../Pages/AddEquip/AddEquip";
import MyEquipList from "../Pages/MyEquipList/MyEquipList";
// import Login from "../Pages/Login/Login";
// import Register from "../Pages/Register/Register";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Login from "./../Pages/Login/Login";
import Register from "./../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allSportsEquip",
        element: <AllSports />,
      },
      {
        path: "/addEquip",
        element: <PrivateRoute><AddEquip /></PrivateRoute>,
      },
      {
        path: "/myEquipList",
        element: <PrivateRoute><MyEquipList /></PrivateRoute>,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
