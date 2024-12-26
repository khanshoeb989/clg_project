import React from 'react';
import { MapPin, Share2, MessageSquare, Phone, ChevronRight } from 'lucide-react';
import { useParams } from 'react-router-dom';

// Restaurant data
const restaurantsData = {
  1: {
    name: 'Tiffin Daddy',
    cuisines: ['North Indian', 'South Indian', 'Chinese'],
    location: 'Pune, 411016',
    phone: '+919604184922',
    description: 'Provides 2 meals per day quality food. Bulk orders are also available.',
    rating: 4.5,
    deliveryOnly: true
  },
  2: {
    name: 'Tiffin Service by Home Chefs',
    cuisines: ['Gujarati', 'Rajasthani', 'North Indian'],
    location: 'Pune, 411016',
    phone: '+919876543210',
    description: 'Offers a variety of home-cooked meals delivered to your doorstep.',
    rating: 4.2,
    deliveryOnly: true
  },
  3: {
    name: 'Dabba Express',
    cuisines: ['Maharashtrian', 'North Indian', 'Chinese'],
    location: 'Lonavala, 410401',
    phone: '+917890123456',
    description: 'Specializes in quick delivery of traditional Indian meals.',
    rating: 3.8,
    deliveryOnly: true
  },
  4: {
    name: 'Tiffin Box',
    cuisines: ['North Indian', 'Chinese', 'Continental'],
    location: 'Pune, 411016',
    phone: '+918765432109',
    description: 'Provides healthy and nutritious meals for working professionals.',
    rating: 4.0,
    deliveryOnly: true
  },
  5: {
    name: 'Ghar Ka Khana',
    cuisines: ['North Indian', 'South Indian', 'Bengali'],
    location: 'Lonavala, 410401',
    phone: '+916789012345',
    description: 'Focuses on homemade-style meals, catering to various dietary preferences.',
    rating: 4.7,
    deliveryOnly: true
  },
  6: {
    name: 'Tiffinwala',
    cuisines: ['Mughlai', 'North Indian', 'Chinese'],
    location: 'Lonavala, 410401',
    phone: '+915678901234',
    description: 'Offers a subscription-based service for daily meal deliveries.',
    rating: 3.5,
    deliveryOnly: true
  }
};

export default function RestaurantInfo() {
  const { id } = useParams();
  const restaurant = restaurantsData[id];

  if (!restaurant) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-red-600">Restaurant not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Restaurant Name */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {restaurant.name}
      </h1>

      {/* Cuisines */}
      <p className="text-gray-600 mb-4">
        {restaurant.cuisines.join(', ')}
      </p>

      {/* Location */}
      <p className="text-gray-600 mb-4">{restaurant.location}</p>

      {/* Contact */}
      <a 
        href={`tel:${restaurant.phone}`}
        className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-6"
      >
        <Phone className="w-4 h-4 mr-2" />
        {restaurant.phone}
      </a>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          <MapPin className="w-4 h-4" />
          Direction
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          <Share2 className="w-4 h-4" />
          Share
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          <MessageSquare className="w-4 h-4" />
          Reviews
        </button>
      </div>

      {/* Delivery Badge */}
      {restaurant.deliveryOnly && (
        <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-md mb-6">
          Delivery Only
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-8">
          <button className="border-b-2 border-pink-500 text-pink-600 pb-4 px-1">
            Overview
          </button>
          <button className="text-gray-600 hover:text-gray-900 pb-4 px-1">
            Order Online
          </button>
          <button className="text-gray-600 hover:text-gray-900 pb-4 px-1">
            Reviews
          </button>
          <button className="text-gray-600 hover:text-gray-900 pb-4 px-1">
            Menu
          </button>
        </nav>
      </div>

      {/* Menu Section */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button className="text-pink-600 hover:text-pink-700 flex items-center">
            See all menus
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-3">Cuisines</h3>
          <div className="flex flex-wrap gap-2">
            {restaurant.cuisines.map((cuisine) => (
              <span
                key={cuisine}
                className="px-3 py-1 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full flex items-center gap-1"
              >
                ✦ {cuisine} ✦
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-2">About</h3>
          <p className="text-gray-600">{restaurant.description}</p>
        </div>
      </div>
    </div>
  );
}