import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from 'lucide-react';

const FoodServiceListing = () => {
  const [activeCategory, setActiveCategory] = useState('Breakfast');
  const categories = ['Breakfast', 'Lunch', 'Dinner'];
  const services = [
    { id: 1, name: 'Tiffin Daddy', location: 'Phase 2, Industrial Area, Mohali, 411038', description: 'Provides 2 meals per day quality food. Bulk orders are also available.' },
    { id: 2, name: 'Tiffin Service by Home Chefs', location: 'Bangalore, 411012', description: 'Offers a variety of home-cooked meals delivered to your doorstep.' },
    { id: 3, name: 'Dabba Express', location: 'Mumbai, 411002', description: 'Specializes in quick delivery of traditional Indian meals.' },
    { id: 4, name: 'Tiffin Box', location: 'Delhi, 411045', description: 'Provides healthy and nutritious meals for working professionals.' },
    { id: 5, name: 'Ghar Ka Khana', location: 'Pune, 411016', description: 'Focuses on homemade-style meals, catering to various dietary preferences.' },
    { id: 6, name: 'Tiffinwala', location: 'Hyderabad, 411040', description: 'Offers a subscription-based service for daily meal deliveries.' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
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
      
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search by pincode"
          className="w-full p-2 pl-10 rounded-md bg-gray-200"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <NavLink 
            key={service.id}
            to="/mealsummary"
            className="bg-orange-100 p-4 rounded-md block hover:bg-orange-200 transition-colors"
          >
            <h3 className="font-bold">{service.name}</h3>
            <p className="text-sm">Location: {service.location}</p>
            <p className="text-sm text-green-600 mt-2">{service.description}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FoodServiceListing;