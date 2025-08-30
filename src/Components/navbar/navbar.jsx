import React, { useContext } from "react";
import { Link, NavLink, useNavigate,  } from "react-router-dom";
import { AuthContext } from "../../Context/authContext";
const Navbar = () => {
const {token , logout:contextLogout  } = useContext(AuthContext)

const navigate = useNavigate()
function logout(){
  contextLogout()
navigate("/login")
}
  return (
    <nav className="sticky top-0 z-50 bg-indigo-800 mx-auto mt-0 rounded-xl w-[90%] sm:w-[700px] lg:w-[900px]" style={{boxShadow: '0 8px 15px -3px rgba(0, 0, 0, 0.5)'}}>
      <div className="flex items-center justify-between px-6 h-16">
        
        {/* Logo */}
      {token?<Link to= '/' className="text-white font-bold text-xl">Social App</Link>
      :<div className="text-white font-bold text-xl">Social App</div> }

        {/* Avatar + Dropdown */}
        {token?         <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow text-white"
          >
            <li><button to ="" >Porfile</button></li>
            <li><button onClick={logout} to ="../login" >Logout</button></li>
          </ul>
        </div> 
        :
          <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <NavLink className="me-4 hover:text-red-500 transition-all " to='../login'>Login</NavLink>
      <NavLink className=" hover:text-red-500 transition-all" to='../register'>Signup</NavLink>
    </ul>
  </div>
  }

      </div>
    </nav>
  );
};

export default Navbar;