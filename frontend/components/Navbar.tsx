import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 p-4 flex justify-between items-center">
      <Link href="/" className="text-white text-xl font-bold">BASEpac</Link>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Wallet Connect</button>
    </nav>
  );
};

export default Navbar;
