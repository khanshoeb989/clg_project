import React, { useState } from "react";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-md sticky top-0 z-50 shadow-md font-title3 font-bold ">
      <div className="container flex items-center justify-between mx-auto h-20 px-6 md:px-12">
        {/* Logo */}
        <div className="h-[70px] w-[70px]">
          <NavLink to="/">
            <img src="/images/1.png" alt="Logo" className="h-full w-full object-contain" />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-green-600 hover:text-green-700 transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-20 left-0 w-full md:w-auto md:flex bg-white md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100 shadow-lg" : "-translate-x-full opacity-0 md:opacity-100 md:translate-x-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8 text-lg font-medium p-6 md:p-0 text-gray-800">
            {/* Home Link */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative transition-all duration-300 group ${
                    isActive ? "text-green-600 font-bold" : "text-gray-800"
                  } hover:text-green-500`
                }
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>

            {/* About Us Link */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative transition-all duration-300 group ${
                    isActive ? "text-green-600 font-bold" : "text-gray-800"
                  } hover:text-green-500`
                }
              >
                About us
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>

            {/* Food Blog Link */}
            <li>
              <NavLink
                to="/foodblog"
                className={({ isActive }) =>
                  `relative transition-all duration-300 group ${
                    isActive ? "text-green-600 font-bold" : "text-gray-800"
                  } hover:text-green-500`
                }
              >
                Food blog
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>

            {/* Contact Us Link */}
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  `relative transition-all duration-300 group ${
                    isActive ? "text-green-600 font-bold" : "text-gray-800"
                  } hover:text-green-500`
                }
              >
                Contact us
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>

            {/* Cart & Login/Signup */}
            <li className="flex items-center space-x-3">
              <NavLink to="/cart" className="relative p-1 hover:text-green-600">
                <FaShoppingBag className="text-xl text-green-600 hover:text-green-700 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1.5 py-0.5">
                  3 {/* Replace with dynamic cart count */}
                </span>
              </NavLink>
              <NavLink to="/login" className="p-1 hover:text-green-600 transition-colors">
                Login /
              </NavLink>
              <NavLink to="/signup" className="p-1 hover:text-green-600 transition-colors">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;