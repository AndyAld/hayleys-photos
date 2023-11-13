import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';

function App() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const addSparkle = (e) => {
      const newSparkle = { 
        x: e.clientX, 
        y: e.clientY, 
        size: Math.random() * 6 + 4, // Random size between 4px and 10px
        id: Math.random() // Unique key for React
      };
      setSparkles((currentSparkles) => [...currentSparkles, newSparkle]);

      // Remove the sparkle after animation ends
      setTimeout(() => {
        setSparkles((currentSparkles) => currentSparkles.filter(sparkle => sparkle.id !== newSparkle.id));
      }, 500); // Matches the duration of the animation
    };

    window.addEventListener('mousemove', addSparkle);

    return () => {
      window.removeEventListener('mousemove', addSparkle);
    };
  }, []);

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col">
     {sparkles.map(sparkle => (
        <span 
          key={sparkle.id} 
          className="sparkle" 
          style={{
            left: sparkle.x, 
            top: sparkle.y, 
            width: sparkle.size, 
            height: sparkle.size
          }}
        >
          ✨
        </span>
      ))}
      <header className="p-4">
        <Navbar />
      </header>

      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
