'use client';
import React, { useState } from 'react';

const HomePage = () => {
  const [isGlowing, setIsGlowing] = useState(false);

  const handleButtonClick = () => {
    setIsGlowing(true);

    // Reset the state after 300ms (or any desired delay)
    setTimeout(() => {
      setIsGlowing(false);
    }, 200); // 300ms is the duration of the effect
  };

  return (
    <div className="relative flex flex-col items-center min-h-full bg-transparent border-spacing-0 text-white">
      <h1 className="text-6xl font-bold mb-4 z-10 pt-4 pb-8">Welcome to BASEpac</h1>
      <p className="text-2xl font-bold mb-6 z-10">Tap to earn and have fun!</p>
      <button 
        className={`transform transition duration-300 rounded-full ${isGlowing ? 'scale-90' : ''}`}
        onClick={handleButtonClick}
      >
        <img src="/BASEpaclogo__1_-removebg-preview.png" alt="BASEpac Logo" width={500} className=""/>
      </button>
    </div>
  );
};

export default HomePage;
