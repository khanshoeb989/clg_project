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
    bankIFSC: '', // New state for Bank IFSC Code
    bankAccount: '', // New state for Bank Account Number
  });

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle meal selection changes
  const handleMealChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        meals: [...prev.meals, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        meals: prev.meals.filter((meal) => meal !== value),
      }));
    }
  };

  // Handle working days selection changes
  const handleDayChange = (day) => {
    setFormData((prev) => ({
      ...prev,
      workingDays: prev.workingDays.includes(day)
        ? prev.workingDays.filter((d) => d !== day)
        : [...prev.workingDays, day],
    }));
  };

  // Handle "Select all" functionality
  const handleSelectAll = () => {
    if (formData.workingDays.length === daysOfWeek.length) {
      setFormData((prev) => ({ ...prev, workingDays: [] }));
    } else {
      setFormData((prev) => ({ ...prev, workingDays: [...daysOfWeek] }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle submission logic
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center justify-center">
          Owner's Detail
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Owner's Name */}
          <div className="mb-4">
            <input
              type="text"
              name="ownerName"
              placeholder="Owner's Name"
              value={formData.ownerName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Restaurant Name */}
          <div className="mb-4">
            <input
              type="text"
              name="restaurantName"
              placeholder="Restaurant Name"
              value={formData.restaurantName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Restaurant Location */}
          <div className="mb-4">
            <input
              type="text"
              name="restaurantLocation"
              placeholder="Restaurant Location"
              value={formData.restaurantLocation}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <input
              type="tel"
              name="mobileNo"
              placeholder="Mobile No"
              value={formData.mobileNo}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Meal Types */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Choose Your Meal</label>
            <div className="space-y-2">
              {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
                <div key={meal}>
                  <input
                    type="checkbox"
                    value={meal}
                    onChange={handleMealChange}
                    className="mr-2"
                  />
                  <label className="text-gray-600">{meal}</label>
                </div>
              ))}
            </div>
          </div>

          {/* PAN Card */}
          <div className="mb-4">
            <input
              type="text"
              name="panCard"
              placeholder="Enter PAN Card"
              value={formData.panCard}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Working Days Section */}
          <div className="border p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">Working days</h3>
              <button
                type="button"
                onClick={handleSelectAll}
                className="text-orange-500 hover:underline"
              >
                {formData.workingDays.length === daysOfWeek.length ? 'Deselect all' : 'Select all'}
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {daysOfWeek.map((day) => (
                <label key={day} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.workingDays.includes(day)}
                    onChange={() => handleDayChange(day)}
                    className="h-5 w-5 text-green-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700">{day}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bank IFSC Code */}
          <div className="mb-4">
            <input
              type="text"
              name="bankIFSC"
              placeholder="Bank IFSC Code"
              value={formData.bankIFSC}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Bank Account Number */}
          <div className="mb-4">
            <input
              type="text"
              name="bankAccount"
              placeholder="Bank Account Number"
              value={formData.bankAccount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupDabba;
