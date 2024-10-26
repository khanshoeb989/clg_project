import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container flex flex-wrap items-center justify-between mx-auto h-20 w-full">
        {/* Logo */}
        <div className="h-[120px] w-[120px] pb-10 translate-x-[8px] translate-y-[-20px]">
          <NavLink to="/"><img src="/images/1.png" alt="Logo" /></NavLink>
          
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex mb-3 pb-6 space-x-6 text-black font-semibold">
            <li className="p-3">
              <NavLink
                style={(e) => ({
                  color: e.isActive ? "green" : "black",
                  fontWeight: e.isActive ? "bold" : "",
                })}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="p-3">
              <NavLink
                style={(e) => ({
                  color: e.isActive ? "green" : "black",
                  fontWeight: e.isActive ? "bold" : "",
                })}
                to="/about"
              >
                About us
              </NavLink>
            </li>
            <li className="p-3">
              <NavLink
                style={(e) => ({
                  color: e.isActive ? "green" : "black",
                  fontWeight: e.isActive ? "bold" : "",
                })}
                to="/foodblog"
              >
                Food blog
              </NavLink>
            </li>
            <li className="p-3">
              <NavLink
                style={(e) => ({
                  color: e.isActive ? "green" : "black",
                  fontWeight: e.isActive ? "bold" : "",
                })}
                to="/contactus"
              >
                Contact us
              </NavLink>
            </li>
            <li className="flex text-black p-3">
              <div className="p-2 flex">
                <FaShoppingBag />
              </div>
              


              <NavLink className={"p-1"} to="/login">
                Login  /
              </NavLink>
              <NavLink className={"p-1"} to="/signup">
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
