import React from "react";

const Blogcard = () => {
  const data = [
    {
      date: "Date: 1-01-2024",
      img: "/images/lunch.jpg",
      desc: "Farm-to-Table: Celebrating local Ingredients and Sustainable Cooking",
    },
    {
      date: "Date: 1-01-2024",
      img: "/images/lunch.jpg",
      desc: "Culinary Adventure: Exploring the flavours of global street food",
    },
    {
      date: "Date: 1-01-2024",
      img: "/images/lunch.jpg",
      desc: "Gourmet on a budget: Delicious recipes that won't break the bank", 
    },
    {
      date: "Date: 1-01-2024",
      img: "/images/lunch.jpg",
      desc: "Food Fusion: Creative recipes that blend culinary traditions",
    },
  ];

  return (
    <div className="bg-slate-100 h-[110vh] w-full">
      <div className="grid grid-cols-2 gap-1 p-4"> {/* Creates a grid with 2 columns */}
        {data.map((elem, index) => {
          return (
            <div className="p-4 w-[400px] h-[350px] flex flex-col ml-40" key={index}>
              <div className="bg-green-600 flex flex-col p-4 rounded-md h-[450px]">
                <div className=" font-semibold">{elem.date}</div>
                <div>
                  <img src={elem.img} alt="Blog" className="w-full h-52 object-cover rounded-md" />
                </div>
                <div className=" font-semibold">{elem.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogcard;
