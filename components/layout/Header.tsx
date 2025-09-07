// components/layout/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          StayEase
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for destinations or properties..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <button className="text-gray-700 hover:text-blue-600 font-medium">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types Navigation */}
      <nav className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 flex space-x-4 overflow-x-auto scrollbar-hide">
          {["Rooms", "Mansion", "Countryside", "Beachfront", "Chalets", "Cabins", "City Apartments"].map((type) => (
            <button
              key={type}
              className="text-sm px-3 py-1 rounded-full bg-white hover:bg-blue-100 border"
            >
              {type}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
