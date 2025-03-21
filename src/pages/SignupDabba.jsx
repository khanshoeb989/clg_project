import React, { useState } from 'react';

const SignupDabba = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    restaurantName: '',
    restaurantLocation: '',
    email: '',
    mobileNo: '',
    meals: [],
    panCard: '',
    workingDays: [],
    bankIFSC: '',
    bankAccount: '',
  });

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMealChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      meals: checked ? [...prev.meals, value] : prev.meals.filter((meal) => meal !== value),
    }));
  };

  const handleDayChange = (day) => {
    setFormData((prev) => ({
      ...prev,
      workingDays: prev.workingDays.includes(day)
        ? prev.workingDays.filter((d) => d !== day)
        : [...prev.workingDays, day],
    }));
  };

  const handleSelectAll = () => {
    setFormData((prev) => ({
      ...prev,
      workingDays: prev.workingDays.length === daysOfWeek.length ? [] : [...daysOfWeek],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-title3">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-600 mb-6">
          Owner's Detail
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Owner & Restaurant Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="ownerName"
              placeholder="Owner's Name"
              value={formData.ownerName}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="text"
              name="restaurantName"
              placeholder="Restaurant Name"
              value={formData.restaurantName}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <input
            type="text"
            name="restaurantLocation"
            placeholder="Restaurant Location"
            value={formData.restaurantLocation}
            onChange={handleChange}
            className="input-field"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="tel"
              name="mobileNo"
              placeholder="Mobile No"
              value={formData.mobileNo}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          {/* Meal Selection */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Choose Your Meal</label>
            <div className="flex flex-wrap gap-4">
              {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                <label key={meal} className="flex items-center space-x-2">
                  <input type="checkbox" value={meal} onChange={handleMealChange} className="checkbox" />
                  <span>{meal}</span>
                </label>
              ))}
            </div>
          </div>

          {/* PAN Card */}
          <input
            type="text"
            name="panCard"
            placeholder="Enter PAN Card"
            value={formData.panCard}
            onChange={handleChange}
            className="input-field"
            required
          />

          {/* Working Days Selection */}
          <div className="border p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-700">Working Days</h3>
              <button type="button" onClick={handleSelectAll} className="text-green-500 hover:underline">
                {formData.workingDays.length === daysOfWeek.length ? 'Deselect all' : 'Select all'}
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {daysOfWeek.map((day) => (
                <label key={day} className="flex items-center space-x-2">
                  <input type="checkbox" checked={formData.workingDays.includes(day)} onChange={() => handleDayChange(day)} className="checkbox" />
                  <span>{day}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bank Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="bankIFSC"
              placeholder="Bank IFSC Code"
              value={formData.bankIFSC}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="text"
              name="bankAccount"
              placeholder="Bank Account Number"
              value={formData.bankAccount}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupDabba;
