# Verbwire API Key Best Practices Demo

This demo app showcases the best practices for using Verbwire API keys, both private keys for server-side components and public keys with specific scopes and restrictions to prevent misuse.

## Setup

1. Clone the repository.

2. Install dependencies:
```bash
npm install
```


3. Make changes to `credentials.js`:
Open the `credentials.js` file and make the following changes:

- Add a Private Key.

- Add a Public Key with Scope '/v1/nft/data/owned'.

- Add another Public Key with Scope '/v1/nft/data/isWalletHolderOfToken' and a Restriction. 

4. Start the application:
```bash
npm run dev
```


## Best Practices for API Key Usage

### 1. Private Key Usage
To ensure maximum security, always use private keys exclusively on the server-side and avoid exposing them on the client-side. In this demo, we have a server-side component that interacts with the Verbwire API using the private key provided in the `credentials.js` file. This approach guarantees that the private key remains safe and can only be accessed by authorized server-side code.

### 2. Public Key Usage with Scopes
For controlled access to specific API functionalities, utilize public keys with scopes. In this demo, two public keys are included in the `credentials.js` file, each with its designated scope.

#### Scope '/v1/nft/data/owned'
This scope allows the app to access data related to owned NFTs. It serves as an example of how to create a public key with limited access to specific endpoints.

#### Scope '/v1/nft/data/isWalletHolderOfToken' with Restriction
This scope enables the app to verify if a given wallet address holds a particular NFT token. Furthermore, a restriction is applied to the public key to specify a particular wallet address (e.g., `'0x...'`). This additional layer of restriction ensures that the API access is further limited, preventing misuse of the key to check unrelated wallet addresses.

## Additional Resources

Check out the deployed version of the app: [Verbwire - Best Practices for API Keys](https://verbwire-keys-bestpractices.vercel.app)

That's it! You should now have the project set up and ready to use. If you have any questions or run into any issues, please feel free to reach out. Happy coding!




