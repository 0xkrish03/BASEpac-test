import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-sky-900 to-blue-950 text-stone-300 min-h-screen p-5 flex flex-col space-y-4 shadow-2xl font-sans font-bold ">
      <Link href="/" className="mb-4 p-2 bg- rounded hover:bg-cyan-400 hover:scale-105 transform transition duration-300">Home</Link>
      <Link href="/leaderboard" className="mb-4 p-2 bg- rounded hover:bg-cyan-400 hover:scale-105 transform transition duration-300">Leader board</Link>
      <Link href="/daily-bonus" className="mb-4 p-2 bg- rounded hover:bg-cyan-400 hover:scale-105 transform transition duration-300">Daily Bonus</Link>
      <Link href="/weekly-tasks" className="mb-4 p-2 bg- rounded hover:bg-cyan-400 hover:scale-105 transform transition duration-300">Weekly Tasks</Link>
      <Link href="/stats" className="mb-4 p-2 bg- rounded hover:bg-cyan-400 hover:scale-105 transform transition duration-300">Stats</Link>
    </div>
  )
};

export default Sidebar;
