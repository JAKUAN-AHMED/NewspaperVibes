import { Link, NavLink } from "react-router-dom";
import user from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/ProviderContext";

const Navbar = () => {
  
    const {User,LogOut,notify1}=useContext(AuthContext);
    const HandleSignOut=()=>{
      LogOut();
      notify1();
    }
    const navlinks=<>
    <li>
        <NavLink to={'/'}>Home</NavLink>
    </li>
    <li>
        <NavLink to={'/about'}>About</NavLink>
    </li>
    <li>
        <NavLink to={'/career'}>career</NavLink>
    </li>
    <li>
        <NavLink to={'/login'}>Login</NavLink>
    </li>
    <li>
        <NavLink to={'/register'}>Register</NavLink>
    </li>
    </>
    return (
      <div className="navbar bg-base-100 mb-8">
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
              {navlinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="w-[50px]">
            <img src={user} alt="" />
          </div>
          {User ? (
            <div>
              <button onClick={
              HandleSignOut
            } 
            className="btn bg-[#403F3F] text-white">Sign Out</button>
            </div>
          ) : (
            <Link to={"/login"} className="btn bg-[#403F3F] text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;