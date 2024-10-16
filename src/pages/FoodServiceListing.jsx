import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from 'lucide-react';

const FoodServiceListing = () => {
  const [activeCategory, setActiveCategory] = useState('Breakfast');
  const [searchPincode, setSearchPincode] = useState('');
  
  const categories = ['Breakfast', 'Lunch', 'Dinner'];

  const services = [
    { id: 1, name: 'Tiffin Daddy', location: 'Pune, 411016', description: 'Provides 2 meals per day quality food. Bulk orders are also available.', category: 'Breakfast', pincode: '411016' },
    { id: 2, name: 'Tiffin Service by Home Chefs', location: 'Pune, 411016', description: 'Offers a variety of home-cooked meals delivered to your doorstep.', category: 'Lunch', pincode: '411016' },
    { id: 3, name: 'Dabba Express', location: 'Lonavala, 410401', description: 'Specializes in quick delivery of traditional Indian meals.', category: 'Lunch', pincode: '411016' },
    { id: 4, name: 'Tiffin Box', location: 'Pune, 411016', description: 'Provides healthy and nutritious meals for working professionals.', category: 'Dinner', pincode: '410401' },
    { id: 5, name: 'Ghar Ka Khana', location: 'Lonavala, 410401', description: 'Focuses on homemade-style meals, catering to various dietary preferences.', category: 'Breakfast', pincode: '410401' },
    { id: 6, name: 'Tiffinwala', location: 'Lonavala, 410401', description: 'Offers a subscription-based service for daily meal deliveries.', category: 'Dinner', pincode: '411016' },
  ];

  // Filter services by both category and pincode
  const filteredServices = services.filter(
    (service) =>
      service.category === activeCategory &&
      service.pincode.includes(searchPincode) // Search by pincode
  );

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
            <NavLink
              key={service.id}
              to="/mealsummary"
              className="bg-orange-100 p-4 rounded-md block hover:bg-orange-200 transition-colors"
            >
              <h3 className="font-bold">{service.name}</h3>
              <p className="text-sm">Location: {service.location}</p>
              <p className="text-sm text-green-600 mt-2">{service.description}</p>
            </NavLink>
          ))
        ) : (
          <p className="text-center text-gray-500">No services found for the selected category and pincode.</p>
        )}
      </div>
    </div>
  );
};

export default FoodServiceListing;
