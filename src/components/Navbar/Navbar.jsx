import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { CiLight } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg md:px-5 lg:px-16 fixed top-0 left-0 right-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
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
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button><CiLight size={35} /></button>
      </div>
    </div>
  );
};

export default Navbar;
