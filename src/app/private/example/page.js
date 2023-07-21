"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  async function mintNFT() {
    const res = await fetch("/api/mint-nft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ walletAddress: walletAddress }),
    });
    const data = await res.json();
    if (data["transactionHash"]) {
      setWalletAddress("");
      setTransactionHash(data["transactionHash"]);
    }
  }

  return (
    <>
      <div className="mx-auto my-8 max-w-3xl text-center">
        <img src="/logo.svg" className="h-12 mx-auto my-6" />
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Private Keys - Example
        </h1>
      </div>
      <div className="mx-auto max-w-2xl my-8 text-center text-lg leading-loose">
        <p>
          This example utilizes a secure server-side API to QuickMint NFTs to a
          specified wallet address. This ensures confidentiality and simplicity,
          making NFT creation a breeze.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex mx-auto my-8 text-center leading-loose">
          <input
            type="text"
            className="bg-gray-800 text-white rounded px-2 py-3 text-sm"
            placeholder="Enter Wallet Address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          {!transactionHash && (
            <button
              className="block mx-4 w-full rounded border border-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              onClick={mintNFT}
            >
              QuickMint
            </button>
          )}

          {transactionHash && (
            <a
              className="block mx-4 w-full rounded border border-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href={`https://goerli.etherscan.io/tx/${transactionHash}`}
              target="_blank"
            >
              View Transaction
            </a>
          )}
        </div>
      </div>
    </>
  );
}
