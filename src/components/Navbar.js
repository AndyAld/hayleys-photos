import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  const renderSparkles = (item) => {
    if (hoveredItem === item) {
      return (
        <>
          <div className='absolute left-0 transform -translate-x-full'>
            {Array.from({ length: Math.floor(Math.random() * 20) + 10 }).map((_, index) => {
              const duration = Math.random() * (1.5 - 0.5) + 0.5;
              const xOffset = (Math.random() - 0.5) * 150; // Randomize horizontal position
              const yOffset = (Math.random() - 0.5) * 150; // Randomize vertical position
              return (
                <span
                  key={`sparkle-${index}`}
                  className='sparkle sparkle-variation'
                  style={{
                    '--sparkle-duration': `${duration}s`,
                    '--sparkle-x': `${xOffset}%`,
                    '--sparkle-y': `${yOffset}%`
                  }}
                >
                  ✨
                </span>
              );
            })}
          </div>
          <div className='absolute right-0 transform translate-x-full'>
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={`right-${index}`} className='sparkle'>✨</span>
            ))}
          </div>
        </>
      );
    }
    return null;
  };

    return (
      <nav className="bg-black bg-opacity-50 text-white p-4">
        <ul className="flex justify-between items-center">
          <li className="text-xl font-bold">HayThereFriend Photography</li>
          <div className="flex space-x-4">
            <li className="relative hover:text-yellow-500 cursor-pointer" onMouseEnter={() => handleMouseEnter('portfolio')} onMouseLeave={handleMouseLeave}>Portfolio{renderSparkles('portfolio')}</li>
            <li className="relative hover:text-yellow-500 cursor-pointer" onMouseEnter={() => handleMouseEnter('sessionInfo')} onMouseLeave={handleMouseLeave}>Session Info{renderSparkles('sessionInfo')}</li>
            <li className="relative hover:text-yellow-500 cursor-pointer" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>About{renderSparkles('about')}</li>
            <li className="relative hover:text-yellow-500 cursor-pointer" onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave}>Contact{renderSparkles('contact')}</li>
          </div>
        </ul>
      </nav>
    );
  }
export default Navbar;