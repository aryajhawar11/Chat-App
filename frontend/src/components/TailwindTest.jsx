import React from 'react';

const TailwindTest = () => {
  return (
    <>
    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur"></div>
    <div className="bg-white p-8 rounded-3xl shadow-xl w-96 z-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
      <form>
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 text-black"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Username</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 text-black"
            placeholder="Choose a username"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 text-black"
            placeholder="Enter a strong password"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 text-black"
            placeholder="Confirm your password"
          />
        </div>
        <button 
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold shadow-md"
        >
          Sign Up
        </button>
        <p className="text-center text-gray-600 mt-4 text-sm">Already have an account? <span className="text-blue-500 font-semibold cursor-pointer hover:underline">Login</span></p>
      </form>
    </div>
    </>
  );
};

export default TailwindTest;