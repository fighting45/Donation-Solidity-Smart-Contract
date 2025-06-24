import { createWalletClient, custom, createPublicClient, formatEther, parseEther } from "https://esm.sh/viem";
import { contractAddress, abi } from "./constants-js.js"
import { sepolia } from 'https://esm.sh/viem/chains';

const connectButton = document.getElementById("connectButton");
const fundButton = document.getElementById("fundButton");
const ethAmountInput = document.getElementById("ethAmount");
const balanceButton = document.getElementById("balanceButton");
const withdrawButton = document.getElementById("withdrawButton");
const addressTo = document.getElementById("addressToAmount")

let walletClient;
let publicClient;
async function connect() {
    if (typeof window.ethereum !== "undefined") {
        try {
            walletClient = createWalletClient({
                transport: custom(window.ethereum)
            })
            const accounts = await walletClient.requestAddresses();
            console.log("Connected accounts:", accounts)
            connectButton.innerHTML = "Connected!"

        }
        catch (error) {
            console.error("Connection Error", error);
            connectButton.innerHTML = "Connection Failed";
        };

    }

    else {
        connectButton.innerHTML = "Please install Metamask";
    }

}
async function fund() {
    const ethAmount = ethAmountInput.value;
    console.log(`Funding with ${ethAmount}`);

    if (typeof window.ethereum !== "undefined") {
        try {
            walletClient = createWalletClient({
                chain: sepolia,
                transport: custom(window.ethereum)
            })
            const [connectedAccount] = await walletClient.requestAddresses();

            publicClient = createPublicClient({
                chain: sepolia,
                transport: custom(window.ethereum)
            })

            const { request } = await publicClient.simulateContract({
                address: contractAddress,
                abi,
                functionName: "fund",
                account: connectedAccount,
                value: parseEther(ethAmount),

            })
            const hash = await walletClient.writeContract(request);
            console.log(hash);

        }
        catch (error) {
            console.error("Connection Error", error);
            connectButton.innerHTML = "Connection Failed";
        };

    }

    else {
        connectButton.innerHTML = "Please install Metamask";
    }
}
//need to define the chain manually for sending 
// the transaciton on viem

// const anvil = {
//     id: 31337,
//     name: "Anvil",
//     network: "anvil",
//     nativeCurrency: {
//         name: "Ether",
//         symbol: "ETH",
//         decimals: 18
//     },
//     rpcUrls: {
//         default: {
//             http: ["http://127.0.0.1:8545"]
//         }
//     }
// }
async function getbalance() {
    if (typeof window.ethereum !== "undefined") {

        const publicClient = createPublicClient({
            chain: sepolia,
            transport: custom(window.ethereum)
        })
        const balance = await publicClient.getBalance({
            address: contractAddress
        })
        console.log(formatEther(balance));
    }

}
async function withdraw() {
    if (typeof window.ethereum != undefined) {
        try {
            publicClient = createPublicClient({

                transport: custom(window.ethereum),
                chain: sepolia

            })
            walletClient = createWalletClient({

                transport: custom(window.ethereum),
                chain: sepolia


            })
            const [connectedAccount] = await walletClient.requestAddresses();
            const { request } = await publicClient.simulateContract({
                address: contractAddress,
                abi,
                functionName: "withdraw",
                account: connectedAccount,
                chain: sepolia
            })
            const hash = await walletClient.writeContract(request);
            console.log("Withdraw successful!", hash);
            withdrawButton.innerHTML = "success!"
        }
        catch (error) {
            console.error("Error with connection", error);
        }
    }
    else {
        withdrawButton.innerHTML("pls Install metamask!");
    }
}
async function checkFunding() {

    console.log("Reading funded amount:")
    const publicClient = await createPublicClient({
        transport: custom(window.ethereum),
        chain: sepolia
    });
    const walletClient = await createWalletClient({
        transport: custom(window.ethereum),
        chain: sepolia
    })
    const connectedAccount = await walletClient.requestAddresses();

    const funding = await publicClient.readContract({
        abi,
        address: contractAddress,
        functionName: "addressToAmountFunded",
        args: connectedAccount
    })
    console.log("funded amount is:", formatEther(funding));
}
connectButton.onclick = connect;
fundButton.onclick = fund;
balanceButton.onclick = getbalance;
withdrawButton.onclick = withdraw;
addressTo.onclick = checkFunding;
