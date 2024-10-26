import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LoginDabba = () => {
  // State for email and password
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    // Handle login logic here (e.g., send formData to a backend)
    console.log(formData);
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center px-4 pt-14 pb-14">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center justify-center">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            
            
            <input
            
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Id"
              required
            />
          </div>
          <div>
            
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className=" ml-3 mt-0">
          <p className="text-gray-600"> <NavLink to="/signup" className="text-green-500 hover:underline">  Forgot password?</NavLink> .</p>
        </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-600">Don't have an account? <NavLink to="/signupdabba" className="text-green-500 hover:underline">Sign up here</NavLink> .</p>
        </div>
        
      </div>
    </div>
  );
};

export default LoginDabba;
