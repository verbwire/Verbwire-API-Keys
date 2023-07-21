import { credentials } from "../../../../credentials";

async function createTransaction(walletAddress) {
  const form = new FormData();
  form.append("name", "Best Practice NFT");
  form.append(
    "description",
    "Best Practices for using Private keys from Verbwire API."
  );
  form.append("recipientAddress", walletAddress);
  form.append(
    "data",
    '[{"trait_type":"Awesomeness","value":"Full"}]'
  );
  form.append("chain", "goerli");

  const options = { method: "POST", headers: { accept: "application/json", 'X-API-Key': credentials.privateKey} };

  options.body = form;

  const res = await fetch("https://api.verbwire.com/v1/nft/mint/quickMintFromMetadata", options);
  const data = await res.json();
  console.log(data);
  return data;
    
}

export async function POST(req) {
  const requestBody = await req.json();
  console.log(requestBody);
  const txnHash = await createTransaction(requestBody.walletAddress);
  const hash = txnHash['transaction_details']['transactionHash'];
  console.log(`Hash: ${hash}`)
  if (txnHash == "Error") {
    return new Response(JSON.stringify({ message: `Error` }));
  }
  return new Response(JSON.stringify({ transactionHash: hash}));
}
