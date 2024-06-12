// components/BlueCreateWalletButton.tsx

import React, { useCallback } from 'react';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import { CSSProperties } from 'react';

const buttonStyles: CSSProperties = {
  background: 'transparent',
  border: '1px solid transparent',
  boxSizing: 'border-box' as 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 200,
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: 18,
  backgroundColor: '#0052FF',
  paddingLeft: 15,
  paddingRight: 30,
  borderRadius: 10,
};

const sdk = new CoinbaseWalletSDK({
  appName: 'BASEpac',
  appLogoUrl: 'https://example.com/logo.png',
  appChainIds: [84532],
});

const provider = sdk.makeWeb3Provider();

interface BlueCreateWalletButtonProps {
  handleSuccess: (address: string) => void;
  handleError: (error: Error) => void;
}

export function BlueCreateWalletButton({ handleSuccess, handleError }: BlueCreateWalletButtonProps) {
  const createWallet = useCallback(async () => {
    try {
      const accounts = await provider.request<string[]>({
        method: 'eth_requestAccounts',
      });
      if (accounts && accounts.length > 0) {
        handleSuccess(accounts[0]);
      } else {
        throw new Error('No accounts found');
      }
    } catch (error) {
      handleError(error as Error);
    }
  }, [handleSuccess, handleError]);

  return (
    <button style={buttonStyles} onClick={createWallet}>
      {/* Uncomment if you have the CoinbaseWalletLogo component */}
      {/* <CoinbaseWalletLogo /> */}
      Create Wallet
    </button>
  );
}
