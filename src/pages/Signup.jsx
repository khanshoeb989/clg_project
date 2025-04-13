import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    email: '',
    password: '',
    address: '',
  });

  // Handling input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., send formData to a backend)
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8 font-title3">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Sign Up as User</h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Mobile Number Input */}
          <div>
            <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Address Input */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-600">
            Already have an account?{' '}
            <NavLink to="/login" className="text-green-500 hover:underline">
              Login here
            </NavLink>
            .
          </p>
        </div>

        {/* Dabba Wala Signup Link */}
        <div className="mt-4 text-center">
          <p className="text-lg text-gray-600">
            Sign Up as Dabba wala?{' '}
            <NavLink to="/signupdabba" className="text-green-500 hover:underline">
              Sign up here
            </NavLink>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;