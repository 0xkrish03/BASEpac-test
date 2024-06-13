import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-blue-500 text-white h-screen p-5 flex flex-col">
      <Link href="/" className="mb-4 p-2 bg-blue-700 rounded">Home</Link>
      <Link href="/leaderboard" className="mb-4 p-2 bg-blue-700 rounded">Leaderboard</Link>
      <Link href="/daily-bonus" className="mb-4 p-2 bg-blue-700 rounded">Daily Bonus</Link>
      <Link href="/weekly-tasks" className="mb-4 p-2 bg-blue-700 rounded">Weekly Tasks</Link>
      <Link href="/stats" className="mb-4 p-2 bg-blue-700 rounded">Stats</Link>
    </div>
  );
};

export default Sidebar;
