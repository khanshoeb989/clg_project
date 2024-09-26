import React from 'react'
import { BsPeopleFill } from 'react-icons/bs';
import { GiHotMeal } from 'react-icons/gi';
import { GiCardboardBox } from 'react-icons/gi';
import { AiFillAlert } from 'react-icons/ai';
import { ImSpoonKnife } from 'react-icons/im';

const Whychoose = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start mt-10 bg-[#FFDFC6] p-6 lg:p-10">
        <div className="left text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl p-3 lg:p-7">
            Why Choose Us?
          </h1>
          <ul className="text-lg md:text-xl lg:text-2xl p-3 lg:p-7 space-y-3">
            <li className="flex justify-center lg:justify-start">
              <div className="p-1 pr-2">
                <AiFillAlert />
              </div>
              Affordable Home made meal
            </li>
            <li className="flex justify-center lg:justify-start">
              <div className="p-1 pr-2">
                <GiHotMeal />
              </div>
              Customized food
            </li>
            <li className="flex justify-center lg:justify-start">
              <div className="p-1 pr-2">
                <GiCardboardBox />
              </div>
              Easy Order
            </li>
            <li className="flex justify-center lg:justify-start">
              <div className="p-1 pr-2">
                <BsPeopleFill />
              </div>
              Choose from multiple vendors
            </li>
            <li className="flex justify-center lg:justify-start">
              <div className="p-1 pr-2">
                <ImSpoonKnife />
              </div>
              Different meal plans
            </li>
          </ul>
        </div>
        <div className="right">
          <img
            src="/images/whyy.png"
            alt="Why Choose Us"
            className="w-[200px] md:w-[300px] lg:w-[400px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Whychoose