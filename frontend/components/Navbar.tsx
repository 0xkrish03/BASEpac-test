import React from 'react';
import Link from 'next/link';
import { client } from '@/app/client';
import { ConnectButton } from 'thirdweb/react';
import { ThirdwebProvider } from "thirdweb/react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-950 to-sky-500 p-4 flex justify-between items-center shadow-lg">
      <Link href="/" className="flex items-center space-x-2 text-white text-xl font-bold hover:scale-105 transform transition duration-300 pl-4">
        <img src="/logo.jpg" alt="BASEpac Logo" width={45} className=""/>
        <span className="pt-5 text-xl text-bold">BASEpac</span>
      </Link>
      <ConnectButton
        client={client}
        />
    </nav>
  );
};

export default Navbar;
