// CustomerSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const customers = [
  {
    id: 1,
    name: 'Pooja Patil',
    img: "/images/cc.webp", // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Amit Sharma',
    img: "/images/c.webp", // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Rahul Singh',
    img: "/images/ccc.webp", // Replace with actual image URL
  },
];

const CustomerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-2xl mx-auto text-center py-10">
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-3xl">“</span> Our Customers <span className="text-3xl">”</span>
      </h2>
      <Slider {...settings}>
        {customers.map((customer) => (
          <div key={customer.id} className="p-4">
            <img
              src={customer.img}
              alt={customer.name}
              className="rounded-full mx-auto w-40 h-40 object-cover"
            />
            <h3 className="mt-4 font-semibold text-lg">{customer.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerSlider;
