"use client";

import React, { useCallback, useMemo } from 'react';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import CoinbaseWalletLogo from './CoinbaseWalletLogo';
import Gradient from './Gradient';  // Import the Gradient component

const GRADIENT_BORDER_WIDTH = 2;

const buttonStyles: React.CSSProperties = {
  background: 'transparent',
  border: '1px solid transparent',
  boxSizing: 'border-box',
};

const sdk = new CoinbaseWalletSDK({
  appName: 'BASEpac',
  appLogoUrl: '',
  appChainIds: [84532],
});

const provider = sdk.makeWeb3Provider();

export function BlackCreateWalletButton({ height = 66, width = 200 }: { height?: number, width?: number }) {
  const minButtonHeight = 48;
  const minButtonWidth = 200;
  const buttonHeight = Math.max(minButtonHeight, height || minButtonHeight);
  const buttonWidth = Math.max(minButtonWidth, width || minButtonWidth);
  const gradientDiameter = Math.max(buttonHeight, buttonWidth);
  const styles = useMemo(
    () => ({
      gradientContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: buttonHeight / 2,
        height: buttonHeight,
        width: buttonWidth,
        boxSizing: 'border-box',
        overflow: 'hidden',
      },
      gradient: {
        background:
          'conic-gradient(from 180deg, #45E1E5 0deg, #0052FF 86.4deg, #B82EA4 165.6deg, #FF9533 255.6deg, #7FD057 320.4deg, #45E1E5 360deg)',
        position: 'absolute',
        top: -buttonHeight - GRADIENT_BORDER_WIDTH,
        left: -GRADIENT_BORDER_WIDTH,
        width: gradientDiameter,
        height: gradientDiameter,
      },
      buttonBody: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        backgroundColor: '#000000',
        height: buttonHeight - GRADIENT_BORDER_WIDTH * 2,
        width: buttonWidth - GRADIENT_BORDER_WIDTH * 2,
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: 18,
        borderRadius: buttonHeight / 2,
        position: 'relative',
        paddingRight: 10,
      },
    }),
    [buttonHeight, buttonWidth, gradientDiameter]
  );

  const createWallet = useCallback(async () => {
    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' }) as string[];
      const address = accounts[0];
      // Handle success (implement handleSuccess)
      console.log('Wallet Address:', address);
    } catch (error) {
      // Handle error (implement handleError)
      console.error('Error connecting wallet:', error);
    }
  }, []);

  return (
    <button style={buttonStyles} onClick={createWallet}>
      <div style={styles.gradientContainer as React.CSSProperties}>
        <Gradient style={styles.gradient as React.CSSProperties}>
          <div style={styles.buttonBody as React.CSSProperties}>
            <CoinbaseWalletLogo containerStyles={{ paddingRight: 10 }} />
            Create Wallet
          </div>
        </Gradient>
      </div>
    </button>
  );
}
