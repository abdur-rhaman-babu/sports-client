import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/MainLayout/Mainlayout";
import Home from "../Pages/Home/Home";
import AllSports from "../Pages/AllSports/AllSports";
import AddEquip from "../Pages/AddEquip/AddEquip";
import MyEquipList from "../Pages/MyEquipList/MyEquipList";
import Login from "./../Pages/Login/Login";
import Register from "./../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ViewDetails from "../components/ViewDetails/ViewDetails";

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
        loader: () => fetch("http://localhost:2500/products"),
      },
      {
        path: "/addEquip",
        element: (
          <PrivateRoute>
            <AddEquip />
          </PrivateRoute>
        ),
      },
      {
        path: "/myEquipList/email/:email",
        element: (
          <PrivateRoute>
            <MyEquipList />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:2500/products/${params.email}`),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:2500/products/${params.id}`),
      },
    ],
  },
]);
