import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-sky-300 to-sky-700 text-stone-800 min-h-screen p-5 flex flex-col space-y-4 shadow-2xl font-sans font-bold">
      <Link href="/" className="mb-4 p-2 bg- rounded hover:bg-cyan-400 hover:scale-105 transform transition duration-300">Home</Link>
      <Link href="/leaderboard" className="mb-4 p-2 bg- rounded hover:bg-cyan-400 hover:scale-105 transform transition duration-300">Leader board</Link>
      <Link href="/daily-bonus" className="mb-4 p-2 bg- rounded hover:bg-cyan-400 hover:scale-105 transform transition duration-300">Daily Bonus</Link>
      <Link href="/weekly-tasks" className="mb-4 p-2 bg- rounded hover:bg-cyan-400 hover:scale-105 transform transition duration-300">Weekly Tasks</Link>
      <Link href="/stats" className="mb-4 p-2 bg- rounded hover:bg-cyan-400 hover:scale-105 transform transition duration-300">Stats</Link>
      <div className="mt-auto">
        <p className="text-sm">Some bottom text</p>
      </div>
    </div>
  )
};

export default Sidebar;
