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
import UpdateList from "../components/UpdateList/UpdateList";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Fashions from "../Pages/Fashions/Fashions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch('http://localhost:2500/products-limited')
      },
      {
        path:'/fashions',
        element:<Fashions/>,
        loader: ()=> fetch('http://localhost:2500/productsCount')
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
        path: "/myEquipList",
        element: (
          <PrivateRoute>
            <MyEquipList />
          </PrivateRoute>
        ),
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
      {
        path:'/updateList/:email/:id',
        element:<UpdateList/>,
        loader: ({params}) => fetch(`http://localhost:2500/products/email/${params.email}/${params.id}`)
      }
    ],
  },
]);
