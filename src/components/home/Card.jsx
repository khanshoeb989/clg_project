import React from 'react';

const Card = () => {
  const data = [
    { img: '/images/lunch.jpg', name: 'Breakfast' },
    { img: '/images/dinner.webp', name: 'Lunch' },
    { img: '/images/lunch.jpg', name: 'Dinner' },
  ];

  return (
    <>
      <div className="flex justify-center pb-4">
        <button className=" w-60 h-14 text-white rounded-2xl bg-green-600 font-semibold text-xl">
          Online Order
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch">
        {data.map((elem, index) => (
          <div
            key={index}
            className="px-6 md:px-4 lg:px-6 pt-5 w-full md:w-1/3 h-auto"
          >
            <div className="h-[250px] md:h-[300px] lg:h-[350px] rounded-t-md overflow-hidden">
              <img
                src={elem.img}
                className="h-full w-full object-cover"
                alt={elem.name}
              />
            </div>
            <button className=" text-lg md:text-xl lg:text-2xl flex justify-center items-center bg-green-600 h-12 md:h-14 border-r-black text-white rounded-b-md w-full">
              {elem.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
