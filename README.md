# Donation Smart Contract

A simple smart contract that allows users (funders) to donate ETH, with Chainlink Price Feeds integration to enforce a minimum donation value in USD.

## 📜 Overview

This project contains a Solidity smart contract (`FundMe`) designed to receive ETH from donors and allow the contract owner to withdraw the funds. It uses Chainlink Oracles to fetch real-time ETH/USD prices to ensure a **minimum donation of $5 USD**.

## 🧱 Contracts

### `FundMe.sol`

- Users can `fund()` the contract by sending ETH.
- Contract enforces a **minimum donation of $5 USD** (converted via Chainlink).
- Only the **contract owner** is allowed to call the `withdraw()` function.
- Keeps track of the funders and their contributed amounts.

### `PriceConvertor.sol`

A custom Solidity **library** used by `FundMe.sol` to:
- Fetch current ETH/USD price from **Chainlink Price Feed**.
- Convert ETH amounts to their USD equivalent.

## 📂 File Structure

donation-contract/ │ ├── FundMe.sol # Main donation smart contract ├── PriceConvertor.sol # Price conversion logic using Chainlink ├── README.md # Project documentation

## 🔧 Tech Stack

- **Solidity**
- **Chainlink Oracles**
- **VS Code / RemixIDE ** (for development environment)

