import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Search, Star } from 'lucide-react'; // Import Star icon
import { FaInfoCircle } from "react-icons/fa";

const FoodServiceListing = () => {
  const [activeCategory, setActiveCategory] = useState('Breakfast');
  const [searchPincode, setSearchPincode] = useState('');
  const navigate = useNavigate();

  const categories = ['Breakfast', 'Lunch', 'Dinner'];

  // Services data now includes 'rating' for each service
  const services = [
    {
      id: 1,
      name: 'Tiffin Daddy',
      location: 'Pune, 411016',
      description: 'Provides 2 meals per day quality food. Bulk orders are also available.',
      category: 'Breakfast',
      pincode: '411016',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Tiffin Service by Home Chefs',
      location: 'Pune, 411016',
      description: 'Offers a variety of home-cooked meals delivered to your doorstep.',
      category: 'Lunch',
      pincode: '411016',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Dabba Express',
      location: 'Lonavala, 410401',
      description: 'Specializes in quick delivery of traditional Indian meals.',
      category: 'Lunch',
      pincode: '411016',
      rating: 3.8,
    },
    {
      id: 4,
      name: 'Tiffin Box',
      location: 'Pune, 411016',
      description: 'Provides healthy and nutritious meals for working professionals.',
      category: 'Dinner',
      pincode: '410401',
      rating: 4.0,
    },
    {
      id: 5,
      name: 'Ghar Ka Khana',
      location: 'Lonavala, 410401',
      description: 'Focuses on homemade-style meals, catering to various dietary preferences.',
      category: 'Breakfast',
      pincode: '410401',
      rating: 4.7,
    },
    {
      id: 6,
      name: 'Tiffinwala',
      location: 'Lonavala, 410401',
      description: 'Offers a subscription-based service for daily meal deliveries.',
      category: 'Dinner',
      pincode: '411016',
      rating: 3.5,
    },
  ];

  // Filter services by both category and pincode
  const filteredServices = services.filter(
    (service) =>
      service.category === activeCategory &&
      service.pincode.includes(searchPincode) // Search by pincode
  );

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 !== 0; // Check if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    return (
      <div className="flex items-center space-x-1">
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <Star key={index} size={18} fill="orange" stroke="none" />
          ))}
        {halfStar && <Star size={18} fill="orange" stroke="none" className="opacity-50" />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <Star key={`empty-${index}`} size={18} stroke="gray" />
          ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 min-h-screen flex flex-col">
      {/* Category Selection Buttons */}
      <div className="flex space-x-2 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md ${
              category === activeCategory ? 'bg-orange-300' : 'bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchPincode}
          onChange={(e) => setSearchPincode(e.target.value)}
          placeholder="Search by pincode"
          className="w-full p-2 pl-10 rounded-md bg-gray-200"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
      </div>

      {/* Filtered Services Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-orange-100 p-4 rounded-md hover:bg-orange-200 transition-colors cursor-pointer"
              onClick={() => navigate('/mealsummary')}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold">{service.name}</h3>
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click from triggering
                    navigate(`/restaurant/${service.id}`); // Navigate to restaurant info
                  }}
                >
                  <FaInfoCircle />
                  
                </button>
              </div>
              <p className="text-sm">Location: {service.location}</p>
              <p className="text-sm text-green-600 mt-2">{service.description}</p>
              {/* Star Ratings */}
              <div className="mt-3">{renderStars(service.rating)}</div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No services found for the selected category and pincode.
          </p>
        )}
      </div>
    </div>
  );
};

export default FoodServiceListing;
