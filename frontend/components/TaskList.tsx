// components/TaskList.tsx
import React from 'react';
import TaskItem from './TaskItem';

const tasks = [
  { icon: <div className="bg-gray-200 p-2 rounded-full">X</div>, text: "Follow Base on X", reward: "+ 1,000 clicks", completed: false, url: "https://twitter.com/Base" },
  { icon: <div className="bg-gray-200 p-2 rounded-full">✉️</div>, text: "Explore more about Base Protocol", reward: "+ 1,000 clicks", completed: false, url: "https://base.org" },
  { icon: <div className="bg-gray-200 p-2 rounded-full">📷</div>, text: "Follow BASEpac on Instagram", reward: "+ 1,000 clicks", completed: false, url: "https://instagram.com/basepac_official/" },
  { icon: <div className="bg-gray-200 p-2 rounded-full">✉️</div>, text: "Follow BASEpac on X", reward: "+ 1,000 clicks", completed: false, url: "" },
  { icon: <div className="bg-gray-200 p-2 rounded-full">X</div>, text: "Follow Coinbase on X", reward: "+ 1,000 clicks", completed: false, url: "https://twitter.com/Coinbase" },
  { icon: <div className="bg-gray-200 p-2 rounded-full">📷</div>, text: "Follow BASEpac CEO on X", reward: "+ 1,000 clicks", completed: false, url: "https://x.com/0xvaibhav24" },
];

const TaskList: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl text-black">
      <h1 className="text-3xl font-bold p-8">Task</h1>
      <div className="p-8">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            icon={task.icon}
            text={task.text}
            reward={task.reward}
            completed={task.completed}
            url={task.url}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
