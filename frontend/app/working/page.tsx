import React from 'react';

const Working = () => {
  return (
    <div className=" justify-center items-start min-h-screen bg-slate-800">
      <div className="text-center pt-8 pb-12">
        <h1 className="font-bold text-5xl text-white">About BASEpac</h1>
      </div>
      <div className=" px-32 text-xl">
        <p className="text-xl">BASEpac is an engaging "tap to earn" game designed to introduce users to the world of Web-3. In BASEpac, players tap a character to earn small amounts of ether with each tap. </p>
        <h1 className="text-bold text-3xl pb-4 pt-8">Key Features:</h1>
          <li>Weekly Tasks and Daily Bonuses: Complete tasks and earn bonus ether.</li>
          <li>Stats Page: Track your worldwide ranking, earnings, and total taps.</li>
          <li>Leaderboard: See how you compare with top players globally.</li>
          <li>Coinbase Smart Wallet support: Easily connect your Coinbase smart wallet to claim rewards and begin your Web-3 journey effortlessly.</li>
          <h1 className="text-3xl text-bold pb-4 pt-8">Our Mission:</h1>
          <p>BASEpac aims to attract attention to Web-3 technology and make the Web-3 journey enjoyable and rewarding for everyone. Join BASEpac today and start earning ether while having fun!</p>
          <p className="pt-8">This concise and reader-friendly description highlights the main features and goals of your game, making it attractive for hackathon judges and potential users..</p>
      </div>
    </div>
  );
};

export default Working;
