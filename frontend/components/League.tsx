import React from 'react';

const leagueLevels = [
  { name: 'Bronze', color: 'text-bronze', icon: '/path/to/bronze-icon.svg' },
  { name: 'Silver', color: 'text-silver', icon: '/path/to/silver-icon.svg' },
  { name: 'Gold', color: 'text-gold', icon: '/path/to/gold-icon.svg' },
  { name: 'Legend', color: 'text-legend', icon: '/path/to/legend-icon.svg' },
];

const LeagueLevels = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-4">League Levels</h2>
      <div className="flex space-x-8">
        {leagueLevels.map((level) => (
          <div key={level.name} className="flex flex-col items-center">
            <img src={level.icon} alt={`${level.name} icon`} className="w-16 h-16 mb-2" />
            <span className={`font-medium ${level.color}`}>{level.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeagueLevels;
