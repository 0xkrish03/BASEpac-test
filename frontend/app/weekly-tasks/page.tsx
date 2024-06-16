'use client';
import React, { useState } from 'react';
import InfoButton from '../InfoButton';
import TaskList from '@/components/TaskList';

function WeeklyTasksPage() {
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
      <h1 className="text-3xl pt-8">Weekly Reward</h1>
      <div className="mt-8 relative">
        <button 
          className={`relative transform transition duration-300 rounded-lg bg-cyan-700 text-2xl w-40 h-14 ${isGlowing ? 'scale-90' : ''}`} 
          onClick={handleButtonClick}
        >
          Start
          <div className="absolute top-0 right-0 mt-[-0.5rem] mr-[-0.5rem]">
            <InfoButton  /> {/* Adjust the size using Tailwind classes */}
          </div>
        </button>
      </div>
      <div className="mt-8">
        <TaskList />
    </div>
    </div>

  );
}

export default WeeklyTasksPage;
