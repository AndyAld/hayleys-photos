import React from 'react';
import bg from '../assets/images/bg_start.JPG'
import 'tailwindcss/tailwind.css';

function MainContent() {
    return (
      <div className="relative text-white">
        {/* Image container */}
        <img src={bg} alt="Sunset background" className="w-full h-full object-cover"/>
  
        {/* Text overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold">✨HayThereFriend✨</h1>
          <p className="text-xl mt-2">✨Photography✨</p>
        </div>
      </div>
    );
  }
export default MainContent;