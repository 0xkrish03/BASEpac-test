import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-teal-800 to-cyan-600 text-white min-h-screen p-5 flex flex-col space-y-4 shadow-2xl font-sans font-bold  ">
      <Link href="/" className="mb-4 p-2 bg- rounded hover:bg-cyan-600 hover:scale-105 transform transition duration-300 ">Home</Link>
      <button className="mb-4 p-2 bg- rounded hover:bg-amber-400 hover:text-stone-700 hover:scale-105 transform transition duration-300 ">Daily Bonus</button>
      <Link href="/leaderboard" className="mb-4 p-2 bg- rounded hover:bg-cyan-600 hover:scale-105 transform transition duration-300 ">Leaderboard</Link>

      <Link href="/weekly-tasks" className="mb-4 p-2 bg- rounded hover:bg-cyan-600 hover:scale-105 transform transition duration-300">Tasks</Link>
      <Link href="/stats" className="mb-4 p-2 bg- rounded hover:bg-cyan-600 hover:scale-105 transform transition duration-300 ">Stats</Link>
      <Link href="/airdrop" className="mb-4 p-2 bg- rounded hover:bg-cyan-600 hover:scale-105 transform transition duration-300 ">Airdrop</Link>
      <Link href="/vision" className="mb-4 p-2 bg- rounded hover:bg-cyan-600 hover:scale-105 transform transition duration-300 ">Vision</Link>
      <Link href="/working" className="mb-4 p-2 bg- rounded hover:bg-cyan-600 hover:scale-105 transform transition duration-300 ">About</Link>

    </div>
  )
};

export default Sidebar;
