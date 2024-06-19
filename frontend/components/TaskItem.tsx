// components/TaskItem.tsx
import React from 'react';

interface TaskItemProps {
  icon: JSX.Element;
  text: string;
  reward: string;
  completed: boolean;
  url: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ icon, text, reward, completed, url }) => {
  const handleButtonClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-center">
        <div className="mr-3">{icon}</div>
        <div>
          <div className="font-semibold pr-8">{text}</div>
          <div className="text-sm text-gray-500">{reward}</div>
        </div>
      </div>
      <button onClick={handleButtonClick} className="bg-orange-500 text-white px-4 py-1 rounded">Go!</button>
    </div>
  );
};

export default TaskItem;
