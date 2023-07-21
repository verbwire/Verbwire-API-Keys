"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");
  const [constractAddress, setContractAddress] = useState("");
  const [isHolder, setIsHolder] = useState("");
  async function checkWallet() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-Key": "pk_live_f4739e18-600b-40c2-865d-33eb5a10f36e",
      },
    };

    const res = await fetch(
      `https://api.verbwire.com/v1/nft/data/isWalletHolderOfToken?walletAddress=${walletAddress}&contractAddress=${constractAddress}&chain=ethereum`,
      options
    );
    const data = await res.json();
    if (data) {
      if (data["isWalletHolderOfToken"]) {
        setIsHolder("is Holder: True");
      } else if (data["isWalletHolderOfToken"] == false) {
        setIsHolder("is Holder: False");
      } else {
        setIsHolder("Error");
      }
    }
  }

  return (
    <>
      <div className="mx-auto my-8 max-w-3xl text-center">
        <img src="/logo.svg" className="h-12 mx-auto my-6" />
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Restricted Keys - Example
        </h1>
      </div>
      <div className="mx-auto max-w-2xl my-8 text-center text-lg leading-loose">
        <p>
          This example utilizes a client-side API call to get whether a wallet
          address is holder of an NFT or not. Takes contract address and wallet
          address as input and returns a boolean value. (Checks on Ethereum)
          <br />
          <strong>
            Restricted Wallet Address:
            0x7cA6c3E55CE32f0f4f5f3D2a38f753F8549763B2
          </strong>
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col mx-auto my-8 text-center leading-loose">
          <input
            type="waddress"
            className="m-2 bg-gray-800 text-white rounded px-2 py-3 text-sm"
            placeholder="Enter Wallet Address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <input
            type="caddress"
            className="m-2 bg-gray-800 text-white rounded px-2 py-3 text-sm"
            placeholder="Enter Contract Address"
            value={constractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
          />
          {!isHolder && (
            <button
              className="block m-2 w-full rounded border border-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              onClick={checkWallet}
            >
              Check
            </button>
          )}
          {isHolder && (
            <button className="block m-2 w-full rounded border border-blue-600 px-4 py-3 text-sm font-medium text-white focus:outline-none focus:ring sm:w-auto">
              {isHolder}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
