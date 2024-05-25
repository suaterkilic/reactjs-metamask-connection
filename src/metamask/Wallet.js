import React, { useState } from "react"
const ethers = require("ethers")
const Wallet = () => {
    console.log('Ethers: ', ethers);
    const [account, setAccount] = useState(null)
    const handleConnectWallet = async () => {
        if(window.ethereum) {
            try {
                await window.ethereum.request({method: 'eth_requestAccounts'})
                const provider = new ethers.provider.Web3Provider(window.ethereum)
                const signer = provider.getSigner()
                const account = await signer.getAddress()
                setAccount(account)
                console.log('Account: ', account);
            } catch (error) {
                console.log('Connection Error: ', error);
            }
        }
    }
    return (
        <>
            <h1>MetaMask Connection</h1>
            <button onClick={handleConnectWallet}>Connect to MetaMask</button>
            {account && <p>Connected Account: {account}</p>}
        </>
    )
}

export default Wallet