import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white h-screen p-5 flex flex-col space-y-4 shadow-2xl">
      <Link href="/" className="mb-4 p-2 bg-gray-700 rounded hover:bg-gray-600 hover:scale-105 transform transition duration-300">Home</Link>
      <Link href="/leaderboard" className="mb-4 p-2 bg-gray-700 rounded hover:bg-gray-600 hover:scale-105 transform transition duration-300">Leaderboard</Link>
      <Link href="/daily-bonus" className="mb-4 p-2 bg-gray-700 rounded hover:bg-gray-600 hover:scale-105 transform transition duration-300">Daily Bonus</Link>
      <Link href="/weekly-tasks" className="mb-4 p-2 bg-gray-700 rounded hover:bg-gray-600 hover:scale-105 transform transition duration-300">Weekly Tasks</Link>
      <Link href="/stats" className="mb-4 p-2 bg-gray-700 rounded hover:bg-gray-600 hover:scale-105 transform transition duration-300">Stats</Link>
    </div>
  );
};

export default Sidebar;
