import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = () => {
  const data = [
    { img: '/images/lunch.jpg', name: 'Breakfast' },
    { img: '/images/dinner.webp', name: 'Lunch' },
    { img: '/images/lunch.jpg', name: 'Dinner' },
  ];

  return (
    <>
      <div className="flex justify-center pb-3">
        <button className="mt-8 mb-6 w-48 h-12 text-white rounded-xl bg-[#4CAF50] font-semibold text-lg">
          Online Order
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-16">
        {data.map((elem, index) => (
          <div
            key={index}
            className="w-full md:w-1/4 max-w-xs"
          >
            <div className="h-[200px] rounded-t-md overflow-hidden">
              <img
                src={elem.img}
                className="h-full w-full object-cover"
                
                alt={elem.name}
              />
            </div>
            <button className="text-base md:text-lg flex justify-center items-center bg-[#4CAF50] h-10 text-white rounded-b-md w-full">
              
              <NavLink to="/foodservicelisting">{elem.name}</NavLink>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;