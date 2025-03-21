import React from "react";

const Blogcard = () => {
  const data = [
    {
      date: "Date: 1-01-2024",
      img: "https://imgs.search.brave.com/AWcoZwlAGkfQxeJwP2mF1FZa-UDzuWdAoGl6LNZc2DU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNS9JbmRp/YW4tRm9vZC1QTkct/SW1hZ2UucG5n",
      desc: "Farm-to-Table: Celebrating Local Ingredients and Sustainable Cooking",
    },
    {
      date: "Date: 1-01-2024",
      img: "https://imgs.search.brave.com/_EPIASgWfsW3OXHbPZI55ZVUPD3wgK0-0ZxKxMWKcko/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNS9JbmRp/YW4tRm9vZC1QTkct/UGhvdG9zLnBuZw",
      desc: "Culinary Adventure: Exploring the Flavours of Global Street Food",
    },
    {
      date: "Date: 1-01-2024",
      img: "https://imgs.search.brave.com/HwSzVgPXMpsDN_v9e4vj_zN8KSZxhjzQVKFJTd9m7KA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNS9JbmRp/YW4tRm9vZC1QTkct/UGljLnBuZw",
      desc: "Gourmet on a Budget: Delicious Recipes That Won't Break the Bank",
    },
    {
      date: "Date: 1-01-2024",
      img: "/images/dinner.webp",
      desc: "Food Fusion: Creative Recipes That Blend Culinary Traditions",
    },
  ];

  return (
    <div className="bg-slate-100 py-12 font-title3">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8 font-title2">
          Latest Blog Posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((elem, index) => (
            <div
              key={index}
              className="bg-[#f1e8cb] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={elem.img}
                alt="Blog"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">{elem.date}</p>
                <h2 className="text-xl font-semibold text-green-800 mb-4">
                  {elem.desc}
                </h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogcard;