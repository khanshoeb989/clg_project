import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="relative pt-20 px-6 md:px-20 flex flex-col-reverse md:flex-row justify-between items-center min-h-screen bg-cover bg-center font-title3"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0    "></div>

      {/* Left Content */}
      <div className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start text-white">
        <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight">
          Lunch <span className="text-green-500">Box</span>
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl font-medium mt-4">
          Fresh & Healthy Meals <br className="hidden md:block" /> Delivered to You
        </h2>

        {/* Search Bar */}
        <div className="flex mt-6 h-14 md:h-16 w-full max-w-xs sm:max-w-sm md:max-w-lg mx-auto md:mx-0 bg-white rounded-full shadow-lg overflow-hidden">
          <input
            type="text"
            className="flex-grow px-4 py-2 text-gray-700 outline-none placeholder-gray-500"
            placeholder="Enter Pincode..."
          />
          <button className="p-4 bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition">
            <FaSearch className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative z-10 mb-10 md:mb-0 flex justify-center">
        <div className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px]">
          <img
            className="w-full h-full object-contain drop-shadow-lg"
            src="/images/2.png"
            alt="Lunch Box"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
