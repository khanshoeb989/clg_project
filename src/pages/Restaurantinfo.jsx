import React from 'react';
import { useParams } from 'react-router-dom';

const Restaurantinfo = () => {
  // Get the id from the URL parameters
  const { id } = useParams();

  // Dummy restaurant data (this can be fetched from an API)
  const restaurants = [
    {
      id: 1,
      name: 'Tiffin Daddy',
      location: 'Pune, 411016',
      description: 'Provides 2 meals per day quality food. Bulk orders are also available.',
      category: 'Breakfast',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Tiffin Service by Home Chefs',
      location: 'Pune, 411016',
      description: 'Offers a variety of home-cooked meals delivered to your doorstep.',
      category: 'Lunch',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Dabba Express',
      location: 'Lonavala, 410401',
      description: 'Specializes in quick delivery of traditional Indian meals.',
      category: 'Lunch',
      rating: 3.8,
    },
    {
      id: 4,
      name: 'Tiffin Box',
      location: 'Pune, 411016',
      description: 'Provides healthy and nutritious meals for working professionals.',
      category: 'Dinner',
      rating: 4.0,
    },
    {
      id: 5,
      name: 'Ghar Ka Khana',
      location: 'Lonavala, 410401',
      description: 'Focuses on homemade-style meals, catering to various dietary preferences.',
      category: 'Breakfast',
      rating: 4.7,
    },
    {
      id: 6,
      name: 'Tiffinwala',
      location: 'Lonavala, 410401',
      description: 'Offers a subscription-based service for daily meal deliveries.',
      category: 'Dinner',
      rating: 3.5,
    },
  ];

  // Convert id to a number and find the restaurant
  const restaurant = restaurants.find((res) => res.id === Number(id));

  // If no restaurant is found, display a message
  if (!restaurant) {
    return (
      <div className="p-4 text-center text-red-500">
        <h1>Restaurant Not Found!</h1>
        <p>Please check the URL or select a valid restaurant.</p>
      </div>
    );
  }

  // Render the restaurant details
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">{restaurant.name}</h1>
      <p className="text-gray-600">Location: {restaurant.location}</p>
      <p className="text-gray-600">Category: {restaurant.category}</p>
      <p className="text-gray-600 mt-4">{restaurant.description}</p>
      <p className="mt-4 font-semibold text-orange-600">Rating: {restaurant.rating} / 5</p>
    </div>
  );
};

export default Restaurantinfo;
