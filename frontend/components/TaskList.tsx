// components/TaskList.tsx
import React from 'react';
import TaskItem from './TaskItem';

const tasks = [
  { icon: <div className="bg-gray-200 p-2 rounded-full ">X</div>, text: "Follow BASEpac on X", reward: "+ $100,000", completed: true, },
  { icon: <div className="bg-gray-200 p-2 rounded-full ">✉️</div>, text: "Subscribe to BASEpac channel on Youtube", reward: "+ $100,000", completed: false ,},
  { icon: <div className="bg-gray-200 p-2 rounded-full ">📷</div>, text: "Follow BASEpac on Instagram", reward: "+ $100,000", completed: false, },
  { icon: <div className="bg-gray-200 p-2 rounded-full ">✉️</div>, text: "Subscribe to BASEpac channel on Telegram", reward: "+ $100,000", completed: false, },
  { icon: <div className="bg-gray-200 p-2 rounded-full ">X</div>, text: "Follow BASEpac CEO on X", reward: "+ $100,000", completed: false, },
  { icon: <div className="bg-gray-200 p-2 rounded-full ">📷</div>, text: "Follow BASEpac CEO on Instagram", reward: "+ $100,000", completed: false, },
];

const TaskList: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl text-black">
      <h1 className="text-3xl text-bold p-8">Task</h1>
      <div className="p-8">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            icon={task.icon}
            text={task.text}
            reward={task.reward}
            completed={task.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;