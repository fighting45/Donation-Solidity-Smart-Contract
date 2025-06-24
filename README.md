# Donation Smart Contract (with Frontend)
A full-stack Ethereum dApp that allows users to donate ETH with a minimum donation enforced in USD using Chainlink Price Feeds. Includes a simple HTML/JavaScript frontend built with Viem for wallet interaction.

## 📜 Overview
This project enables:

- A Solidity smart contract (FundMe.sol) to collect ETH donations.

- Chainlink Oracle integration to enforce a minimum $5 USD donation.

- A frontend interface (frontend/) where users can:

- Connect MetaMask

- Send donations

- Check contract balance

- Withdraw funds (owner only)

- View how much ETH each address has donated

## 🧱 Smart Contract
`FundMe.sol`
- Users call fund() to donate ETH.

- Uses Chainlink Price Feed to ensure the donation is worth at least $5 USD.

- Tracks each donor's address and their total donations.

- withdraw() function restricted to contract owner.

`PriceConvertor.sol`
- A Solidity library used to:

- Fetch live ETH/USD price via Chainlink Oracle

- Convert ETH to USD

- Enforce the minimum funding requirement

## 🖼️ Frontend (frontend/)
### Built with:
HTML + Vanilla JavaScript

Viem for smart contract interaction

MetaMask integration

Custom Chain setup (e.g., Sepolia or Anvil local chain)

#@ Features:
🔌 Connect MetaMask wallet

💸 Donate ETH

💰 Check contract balance

🧾 View individual donation amount

🧑‍⚖️ Owner-only fund withdrawal

### Folder Structure:

frontend/
├── index.html             # Main UI
├── index-js.js            # All Viem client logic
├── constants-js.js        # Contract address + ABI

### 📂 File Structure

Donation-Solidity-Smart-Contract/
├── contracts/
│   ├── FundMe.sol              # Donation smart contract
│   └── PriceConvertor.sol      # Library for ETH/USD price conversion
│
├── frontend/
│   ├── index.html              # Frontend UI
│   ├── index-js.js             # JavaScript logic with Viem
│   ├── constants-js.js         # ABI and contract address
│
├── scripts/                    # (Optional) Deployment scripts
├── test/                       # (Optional) Contract tests
├── README.md
└── package.json                # Project dependencies
## 🔧 Tech Stack
Solidity (Smart Contract)

Chainlink Oracles (Price Feeds)

Viem (Smart contract interaction in frontend)

MetaMask (Wallet connection)

Anvil / Sepolia (Local or testnet network)

HTML + JS (Frontend interface)

## 🚀 Getting Started
Clone the repo

git clone https://github.com/yourusername/Donation-Solidity-Smart-Contract
cd Donation-Solidity-Smart-Contract
Install a local dev server (for frontend testing)

npm install -g http-server
cd frontend
http-server
Open in browser

Visit: http://localhost:8080

Connect MetaMask (select Sepolia or Anvil, based on contract)

## 🧪 Testing
Test contracts via Remix or Hardhat/Foundry.

Interact with frontend via your browser and MetaMask.

For local testing: use Anvil and import local accounts into MetaMask.

## 🙋 FAQ
Q: Why is my withdraw() not working?
A: Ensure you're calling from the contract owner's address, and you're on the correct network (Sepolia/Anvil).

Q: Viem throws a no chain provided error?
A: Pass chain: sepolia or your local anvil chain in the client constructor.

## 🏁 Final Note
This repo provides a simple but complete example of building a smart contract with a functional frontend using modern tooling like Viem and Chainlink. Ideal for learning and hackathon-ready projects!

Let me know if you want this turned into a real README.md file in your project.










