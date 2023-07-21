export const credentials = {

  privateKey: "YOUR_PRIVATE_KEY",

//   Unrestricted Private Keys have a scope added to them,
//   Which is used to determine what the key can access.
//   Add Scope : /v1/nft/data/owned

  publicKeyUnrestricted: "YOUR_PUBLIC_KEY",
 

//    Restricted Private Keys have a scope and restriction added to them,
//    Which is used to determine what the key can access.
//    Add Scope :  /v1/nft/data/isWalletHolderOfToken
//    Add Restriction:  
//                     walletAddress  "Your_Wallet_Address"

  publicKeyRestricted: "YOUR_ANOTHER_PUBLIC_KEY ",
};
