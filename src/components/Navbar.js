import React from 'react';
import 'tailwindcss/tailwind.css';

function Navbar() {
    return (
      <nav className="bg-black bg-opacity-50 text-white p-4">
        <ul className="flex justify-between items-center">
          <li className="text-xl font-bold">HayThereFriend Photography</li>
          <div className="flex space-x-4">
            <li className="hover:text-gray-300 cursor-pointer">Portfolio</li>
            <li className="hover:text-gray-300 cursor-pointer">Session Info</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </div>
        </ul>
      </nav>
    );
  }
export default Navbar;