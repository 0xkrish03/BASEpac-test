// app/page.tsx
"use client";
import React, { useState } from 'react';
import PacmanLogo from '../../components/PacmanLogo';
import { BlueCreateWalletButton } from '../../components/CreateWalletButton';

const Home: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);

  const handleSuccess = (address: string) => {
    setAccount(address);
  };

  const handleError = (error: Error) => {
    console.error('Error connecting to wallet:', error);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <PacmanLogo />
      <h1 className="text-3xl font-bold mt-4">Click the PACMAN</h1>
      {account ? (
        <p className="mt-4">Connected account: {account}</p>
      ) : (
        <div className="mt-4">
          <BlueCreateWalletButton handleSuccess={handleSuccess} handleError={handleError} />
        </div>
      )}
    </div>
  );
};

export default Home;
