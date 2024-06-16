// InfoButton.jsx
import React, { useState } from 'react';

const InfoButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        i
      </button>
      {showTooltip && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 p-2 bg-gray-800 text-white text-sm rounded shadow-lg">
         Tap the pac for the rewards(Goal-20,000 Taps)
        </div>
      )}
    </div>
  );
};

export default InfoButton;