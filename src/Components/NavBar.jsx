import React, { useContext } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { authorizedContext } from "./AuthProvider";
import { toast } from "react-toastify";

const NavBar = () => {
  const {user, Logout} = useContext(authorizedContext)
  const signoutHandler = ()=>{
    Logout()
    .then(result=>{
      Navigate('/login')
      toast.success("user logout successfully")
    })
    .catch(error=>{
      toast.error(error.message)
    })

  }
    const navItem = <>

    <NavLink to="/"><li>Home</li></NavLink>
    <NavLink to ="/my-application"><li>My-Application</li></NavLink>
    <NavLink><li>Home</li></NavLink>



    </>
  return (
    <div>
      <div className="navbar bg-base-100">
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
              {
                navItem
              }
              
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">News-Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4">
            {
               navItem 
            }  
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
        <Link to = "/register"> <button className="btn bg-blue-600 text-white font-bold">Register</button></Link>
        
         {
          user ? <div className="flex justify-center items-center gap-3">
            <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
            <button onClick={signoutHandler} className="btn bg-black text-white font-bold">Log-Out</button>
          </div> :
           <Link to="/login"><button className="btn bg-black text-white font-bold">Login</button></Link>
        }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
