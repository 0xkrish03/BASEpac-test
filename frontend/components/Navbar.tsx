import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-sky-500 to-blue-900 p-4 flex justify-between items-center shadow-lg">
      <Link href="/" className="text-white text-xl font-bold hover:scale-105 transform transition duration-300">BASEpac</Link>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 hover:scale-105 transform transition duration-300">Wallet Connect</button>
    </nav>
  );
};

export default Navbar;
