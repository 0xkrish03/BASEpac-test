import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-950 to-sky-500 p-4 flex justify-between items-center shadow-lg">
      
      <Link href="/" className="flex items-center space-x-2 text-white text-xl font-bold hover:scale-105 transform transition duration-300 pl-4">
        <img src="/logo.jpg" alt="BASEpac Logo" width={45} className=""/>
        <span className="pt-5 text-xl text-bold">BASEpac</span>
      </Link>

      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 hover:scale-105 transform transition duration-300">Wallet Connect</button>
    </nav>
  );
};

export default Navbar;
