import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    // Here you would typically send the feedback to your backend
    setFeedback('');
  };

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6 bg-green-50 rounded-lg shadow-md mt-5 mb-5 font-title">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-green-800">Any Feedback?</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-2 mb-4 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          rows="4"
          placeholder="Please enter your feedback here..."
        />
        <button 
          type="submit"
          className="w-full bg-[#4CAF50] hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;