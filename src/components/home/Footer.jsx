import React from 'react';


import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-green-600 p-4">
        <div className="flex space-x-6 text-white mb-4">
          <NavLink ><FaFacebook /></NavLink>
          <NavLink><RiInstagramFill /></NavLink>
          <NavLink><FaTwitter /></NavLink>
        </div>
        <div className="mb-4">
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-white text-center">
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/about">About us</NavLink>
            </li>
            <li>
            <NavLink to="/contactus">Contact us</NavLink>
            </li>
            <li>
            <NavLink to="/foodblog">Food blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center text-center text-white p-4 border-t border-white w-full">
          <h1 className="px-2">&copy; 2024 Lunch-Box. All rights reserved.</h1>
          <h1 className="px-2">
            <NavLink>Terms and Conditions</NavLink>
          </h1>
          <h1 className="px-2">
            
            <NavLink>Privacy and Policy</NavLink>
            
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
