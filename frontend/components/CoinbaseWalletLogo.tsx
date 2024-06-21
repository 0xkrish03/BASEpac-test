import React from 'react';

interface CoinbaseWalletLogoProps {
  containerStyles?: React.CSSProperties;
}

const CoinbaseWalletLogo: React.FC<CoinbaseWalletLogoProps> = ({ containerStyles }) => {
  return (
    <div style={containerStyles}>
      <img src="https://example.com/logo.png" alt="Coinbase Wallet Logo" style={{ width: 24, height: 24 }} />
    </div>
  );
};

export default CoinbaseWalletLogo;
