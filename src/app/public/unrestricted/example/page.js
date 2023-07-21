"use client";
import { useState } from "react";
import { credentials } from "../../../../../credentials";

export default function Home() {
  const [walletAddress1, setWalletAddress1] = useState("");
  const [walletAddress2, setWalletAddress2] = useState("");
  const [response1, setResponse1] = useState("");
  const [response2, setResponse2] = useState("");

  const publicKey = credentials.publicKeyUnrestricted;

  async function checkOwnedNFTs() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-Key': publicKey
        }
      };
      
      const res = await fetch(`https://api.verbwire.com/v1/nft/data/owned?walletAddress=${walletAddress1}&chain=goerli`, options)
      const data = await res.json();  
      if (data) {
        if(data['nfts']) {
        const nfts = data['nfts']
        setResponse1(`NFTs Owned: ${nfts.length}`)
        }
        else {
            setResponse1('Error')
            }
      }
      else {
        setResponse1('Error')
      }
  }
  async function checkCreatedNFTs() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-Key': publicKey
        }
      };
      
      const res = await fetch('https://api.verbwire.com/v1/nft/data/created?walletAddress=0x171a893e5675092304ccC4bf0d2335d553ABD81A&chain=goerli', options)
      const data = await res.json(); 
      if (data) {
        if(data['nfts']) {
        const nfts = data['nfts']
        setResponse2(`NFTs Created: ${nfts.length}`)
        }
        else {
            setResponse2('Error')
            }
      }
      else {
        setResponse2('Error')
      }


  }  

  return (
    <>
      <div className="mx-auto my-8 max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Scoped Keys - Example
        </h1>
      </div>
      <div className="mx-auto max-w-2xl my-8 text-center text-lg leading-loose">
        <p>
          This example utilizes a client-side API call 2 different functions.
          One to check number of NFTs in a Wallet (added to scopes) and the
          other to check NFTs created by Wallet (not added to scopes). 
          <strong> Chain: Goerli</strong>
          
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">
          <div className="p-8 bg-gray-800 rounded-md flex flex-col mx-2 my-8 text-center leading-loose">
            <strong>Check NFTs Owned</strong>
            <input
              type="waddress"
              className="m-2 bg-gray-700 text-white rounded px-2 py-3 text-sm"
              placeholder="Enter Wallet Address"
              value={walletAddress1}
              onChange={(e) => setWalletAddress1(e.target.value)}
            />
            {!response1 && (
              <button className="block m-2 w-full rounded border border-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              onClick={checkOwnedNFTs}
              >
                Check
              </button>
            )}
            {response1 && (
              <button className="block m-2 w-full rounded border border-blue-600 px-4 py-3 text-sm font-medium text-white focus:outline-none focus:ring sm:w-auto">
                {response1}
              </button>
            )}
          </div>
          <div className="mx-2 p-8 bg-gray-800 rounded-md flex flex-col my-8 text-center leading-loose">
            <strong>Check NFTs Created</strong>
            <input
              type="waddress"
              className="m-2 bg-gray-700 text-white rounded px-2 py-3 text-sm"
              placeholder="Enter Wallet Address"
              value={walletAddress2}
              onChange={(e) => setWalletAddress2(e.target.value)}
            />
            {!response2 && (
              <button className="block m-2 w-full rounded border border-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              onClick={checkCreatedNFTs}
              >
                Check
              </button>
            )}
            {response2 && (
              <button className="block m-2 w-full rounded border border-blue-600 px-4 py-3 text-sm font-medium text-white focus:outline-none focus:ring sm:w-auto">
                {response2}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
