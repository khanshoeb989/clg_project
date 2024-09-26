import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <div 
      className="pt-20 px-6 md:px-20 flex flex-col-reverse md:flex-row justify-between items-center bg-cover bg-center b"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="left text-center md:text-left">
        <h1 className="font-bold text-6xl md:text-8xl lg:text-9xl">
          Lunch <span className="text-red-500 font-bold">Box</span>
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold p-4">
          Delicious Food at your <br /> doorstep
        </h2>
        <div className="flex pt-6 h-12 md:h-16 w-full max-w-md mx-auto md:mx-0">
          <input
            type="text"
            className="bg-slate-100 rounded-md flex-grow px-4 py-2"
            placeholder="Search By Pincode"
          />
          <FaSearch className="ml-2 self-center text-gray-500" />
        </div>
      </div>
      <div className="right mb-10 md:mb-0">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]">
          <img
            className="w-full h-full translate-x-[-10px] translate-y-[-30px] md:translate-y-[-60px]"
            src="/images/2.png"
            alt="Lunch Box"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
