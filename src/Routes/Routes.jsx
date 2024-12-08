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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch('https://sports-equipment-server-beta.vercel.app/products-limited')
      },
      {
        path: "/allSportsEquip",
        element: <AllSports />,
        loader: () => fetch("https://sports-equipment-server-beta.vercel.app/products"),
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
          fetch(`https://sports-equipment-server-beta.vercel.app/products/${params.id}`),
      },
      {
        path:'/updateList/:email/:id',
        element:<UpdateList/>,
        loader: ({params}) => fetch(`https://sports-equipment-server-beta.vercel.app/products/email/${params.email}/${params.id}`)
      }
    ],
  },
]);
