import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-indigo-800 mx-auto mt-0 rounded-xl w-[90%] sm:w-[700px] lg:w-[900px]" style={{boxShadow: '0 8px 15px -3px rgba(0, 0, 0, 0.5)'}}>
      <div className="flex items-center justify-between px-6 h-16">
        
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          Social App
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#" className="hover:text-indigo-300">Home</a>
          <a href="#" className="hover:text-indigo-300">About</a>
          <a href="#" className="hover:text-indigo-300">Services</a>
          <a href="#" className="hover:text-indigo-300">Contact</a>
        </div>

        {/* Avatar + Dropdown */}
        <div className="dropdown dropdown-end">
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
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
