import React from "react";
import WalletBox from "./WalletBox";

const WalletBoxContainer: React.FC = () => {
  return (
    <div className="absolute px-10 py-12 border-gray-300 border-solid border-4 rounded-xl ring-1">
      <h1 className="text-center font-bold text-2xl text-black mb-10">E-Wallet</h1>
      <div className="flex flex-wrap gap-x-4">
        <WalletBox />
        <WalletBox />
        <WalletBox />
      </div>
      <div className="flex flex-wrap mt-4 gap-x-4">
        <WalletBox />
        <WalletBox />
        <WalletBox />
      </div>
      <div className="flex flex-wrap mt-4 gap-x-4">
        <WalletBox />
        <WalletBox />
        <WalletBox />
      </div>
    </div>
  );
};

export default WalletBoxContainer;
