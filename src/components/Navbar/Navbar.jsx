import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { CiDark, CiLight } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
import { toast } from "react-toastify";
import { MdDarkMode } from "react-icons/md";
const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(false)
  
  useEffect(()=>{
    if(theme){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[theme])

  const handleSignOut = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout succssfull");
      })
      .catch((error) => {
        // console.log("error", error);
      });
  };
  return (
    <div className="navbar bg-base-100 dark:border-b-2 dark:border-white dark:bg-black dark:text-white shadow-lg md:px-5 lg:px-16 z-50 fixed top-0 left-0 right-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars size={25} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 dark:border-b-2 dark:border-white dark:bg-black dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allSportsEquip">All Sports Equipment</NavLink>
            </li>
            <li>
              <NavLink to="/addEquip">Add Equipment</NavLink>
            </li>
            <li>
            <NavLink to="/myEquipList">My Equipment List</NavLink>
            </li>
            <li>
            <NavLink to="/fashions">Fashions</NavLink>
            </li>
            <div>
              {user?.email ? (
                <div className="">
                  <button
                    className="border-2 rounded-lg w-3/4 py-1"
                    onClick={handleSignOut}
                  >
                    Signout
                  </button>
                  <img id="my-anchor-element"
                    className="w-16 h-16 mt-4 mx-auto rounded-lg"
                    src={user?.photoURL}
                    alt=""
                  />
                  <Tooltip
                    anchorSelect="#my-anchor-element"
                    content={user?.displayName}
                  /> 
                </div>
              ) : (
                <ul className="space-y-2">
                  {" "}
                  <li className="border-2">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li className="border-2">
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </ul>
              )}
            </div>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-10 md:w-15" src={logo} alt="" />
          <p className="font-bold text-xl">EquiSports</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allSportsEquip">All Sports Equipment</NavLink>
          </li>
          <li>
            <NavLink to="/addEquip">Add Equipment</NavLink>
          </li>
          <li>
          <NavLink to="/myEquipList">My Equipment List</NavLink>  
          </li>
          <li>
            <NavLink to="/fashions">Fashions</NavLink>
            </li>
          <div>
            {user?.email ? (
              <div className="flex items-center gap-2">
                <button
                  className="border-2 p-2 rounded-lg"
                  onClick={handleSignOut}
                >
                  Signout
                </button>
                <img id="my-anchor-element"
                  className="w-10 rounded-full h-10 border-2 cursor-pointer border-black"
                  src={user?.photoURL}
                  alt=""
                />
                  <Tooltip
                    anchorSelect="#my-anchor-element"
                    content={user?.displayName}
                  />
              </div>
            ) : (
              <ul className="flex items-center gap-4">
                {" "}
                <li className="border-2 rounded-lg">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="border-2 rounded-lg">
                  <NavLink to="/register">Register</NavLink>
                </li>
              </ul>
            )}
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={()=> setTheme(!theme)}>
          {
            theme ?  <CiLight size={35} /> : <CiDark size={35}/>
          }
        </button>
      </div>
    </div>
  );
};

export default Navbar;
