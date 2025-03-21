import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const MealSummaryForm = () => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const handleQuantityChange = (increment) => {
    const newQuantity = Math.max(0, quantity + increment);
    setQuantity(newQuantity);
    // Assuming a fixed price of 100 for demonstration
    setTotal(newQuantity * 100);
  };

  return (
    <div className="max-w-lg mx-auto bg-orange-100 p-6 rounded-lg shadow-md mb-4 mt-4 w-full sm:w-3/4 lg:w-2/3 font-title3">
      <div className="flex flex-wrap justify-between mb-6 gap-2">
        {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
          <button key={meal} className="bg-gray-200 px-4 py-2 rounded-md flex items-center w-full sm:w-auto justify-center">
            {meal} <Plus size={16} className="ml-1" />
          </button>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4 text-center">Summary</h2>

      <form className="space-y-4">
        <input type="text" placeholder="First Name" className="w-full p-2 rounded-md bg-gray-200" />
        <input type="tel" placeholder="Mobile Number" className="w-full p-2 rounded-md bg-gray-200" />
        <input type="text" placeholder="Address" className="w-full p-2 rounded-md bg-gray-200" />

        <div className="relative">
  <select className="w-full p-2 rounded-md bg-gray-200 appearance-none" defaultValue="">
    <option value="" disabled hidden>
      Select meal plan
    </option>
    <option value="breakfast">Breakfast</option>
    <option value="lunch">Lunch</option>
    <option value="dinner">Dinner</option>
  </select>
  <ChevronDown size={20} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
</div>

<div className="relative">
  <select className="w-full p-2 rounded-md bg-gray-200 appearance-none" defaultValue="">
    <option value="" disabled hidden>
      Select Subscription Model
    </option>
    <option value="day">Day</option>
    <option value="week">Week</option>
    <option value="month">Month</option>
  </select>
  <ChevronDown size={20} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
</div>

<div className="relative">
  <select className="w-full p-2 rounded-md bg-gray-200 appearance-none" defaultValue="">
    <option value="" disabled hidden>
      Payment Mode
    </option>
    <option value="cash">Cash</option>
    <option value="upi">UPI</option>
  </select>
  <ChevronDown size={20} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
</div>


        <div className="flex items-center justify-between">
          <span className="font-semibold">Qty</span>
          <div className="flex items-center">
            <button type="button" onClick={() => handleQuantityChange(-1)} className="bg-gray-200 p-2 rounded-md">
              <Minus size={16} />
            </button>
            <span className="mx-4">{quantity}</span>
            <button type="button" onClick={() => handleQuantityChange(1)} className="bg-gray-200 p-2 rounded-md">
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold">Total</span>
          <span className="bg-gray-200 px-4 py-2 rounded-md">= Rs. {total}</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2 mt-6">
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 w-full sm:w-auto">
            Order Now
          </button>
          <button type="button" className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 w-full sm:w-auto">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default MealSummaryForm;
