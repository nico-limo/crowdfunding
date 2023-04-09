# Crowdfunding

The Crowdfunding App is a decentralize platform that allows users to create campaigns to raise funds on the Goerli network. The app is built on top of the Ethereum blockchain, utilizing smart contracts to facilitate the crowdfunding process.

With this app, users can create campaigns to fund their projects, causes, or ideas. The campaigns can have a fixed funding goal, and users can choose from different reward tiers for their contributions. Contributions can be made using Ether, the native currency of the Ethereum network.

The app also offers a transparent and secure way for contributors to track their donations and monitor the progress of the campaign. All transactions are recorded on the blockchain, providing an immutable record of the campaign's funding history.

## Features

- See all available campaigns
- Fund a campaign
- Create a campaign

## Screenshots

This page displays all available campaigns that users can contribute to. Users can filter campaigns by category or search for a specific campaign.

<img src='/client/src/assets/screen1.png' alt='Home'>

This page provides detailed information about a selected campaign, including the campaign description, funding goal, and list of donators. Users can choose to contribute to the campaign by selecting an amount of ethers.

<img src='/client/src/assets/screen2.png' alt='Campaign'>

This page allows users to create their own crowdfunding campaign. Users can specify the campaign title, funding goal, description, deadline and an image.

<img src='/client/src/assets/screen3.png' alt='Create'>

## Requirements

To run this project, you'll need:

- Node.js version 16 or higher installed on your computer.
- Yarn or npm package manager installed on your computer.
- Metamask wallet extension installed on your browser. You can download and install it from [metamask.io](https://metamask.io/).
- Have Goerli network connected on your metamask and have Ethers for Gas Transactions. [Faucet One](https://goerlifaucet.com/).

## Deployment & Smart Contract

- The website is deployed using the Vercel platform [Crowdfunding website]().
- The smart contract for the project is deployed on the [Goerli Network](https://goerli.etherscan.io/address/0xEb74a94E5431Ac5E1521744AA6e545Be27f42f17).

## Tools Used

List of tools, frameworks, libraries, or APIs used in the project. You can also include any development environment or text editor used.

- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that provides static typing and other language features.
- [Redux-Toolkit](https://redux-toolkit.js.org/) - A library for efficient Redux development, providing utilities for simplified setup, reducing boilerplate code, and more.
- [thirdweb](https://thirdweb.com/) - A decentralized application development platform that allows developers to easily build, test, and deploy smart contracts and dApps on Ethereum and other blockchain networks.
- [react-router-dom](https://reactrouter.com/en/6.10.0) - A library for declarative routing and navigation in React applications.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for quickly building custom designs without writing CSS from scratch.
- [Ethers](https://docs.ethers.io/v5/) - A library for interacting with the Ethereum blockchain and its ecosystem.
- [hardhat](https://hardhat.org/) - A development environment for building and testing smart contracts for Ethereum and other EVM-compatible blockchains.
- [dotenv](https://github.com/motdotla/dotenv) - A zero-dependency module that loads environment variables from a .env file into process.env.

## Thirdweb

Used to setup the initial project and deploy the Smart Contract.
To learn more about thirdweb, Vite and React, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/react) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com/react) - check our guides and development resources.
- [Vite Documentation](https://vitejs.dev/guide/) - learn about Vite features.
- [React documentation](https://reactjs.org/) - learn React.
