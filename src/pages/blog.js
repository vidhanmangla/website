import React from 'react'
import Gas from '../assets/gas.png'
import Self_destruct from '../assets/self_destruct.png'
import Annual_Energy_Consumption from '../assets/Annual_Energy_Consumption.png'
import languages from '../assets/languages.png'
import testnets from '../assets/testnets.png'


const Blog = () => {
    
    return (

        <section className="blog">

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
                <h2 align="center">Welcome to Vidhan's Blog!</h2>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                            <p><u>WHAT ARE BLOCK CONFIRMATIONS?</u> (March 20, 2023)</p>
                        <br></br>
                        <br></br>
                            <p>When deploying a smart contract, why is it always a good practise to have at least 3 block confirmations?</p>
                        <br></br>
                            <p>As part of the “order selection mechanism” (which is called “mining”) it may happen that blocks are reverted from time to time, but only at the “tip” of the chain. The more blocks are added on top of a particular block, the less likely this block will be reverted. So it might be that your transactions are reverted and even removed from the blockchain, but the longer you wait, the less likely it will be.</p>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
        
                            <p><u>SVB AND USDC</u> (March 13, 2023)</p>
                        <br></br>
                        <br></br>
                            <p>USDC is a form of cryptocurrency that is tethered to the value of the US dollar. This means that one USDC is always equivalent to one US dollar. The token is an ERC-20 variety that is constructed on the Ethereum blockchain, and it is issued by CENTRE, a cooperative effort between Circle and Coinbase.</p>
                        <br></br>
                            <p>When an individual desires to purchase USDC, they must first deposit US dollars into a CENTRE bank account. They will then receive the equivalent amount of USDC tokens in exchange, or they can acquire them from an exchange.</p>
                        <br></br>
                            <p>The US dollars that are deposited into the CENTRE bank account are kept in reserve and are subjected to frequent third-party audits to guarantee that there are always enough funds available to back the USDC tokens that are in circulation.</p>
                        <br></br>
                            <p>USDC tokens can be exchanged for US dollars at any moment by sending them back to the CENTRE, which will then transfer the equivalent sum of US dollars to the user's bank account.</p>
                        <br></br>
                            <p>Turning our attention now to Silvergate, it is widely recognized as being one of the most cryptocurrency-friendly banks, as well as the largest bank for technology startups. It has recently announced its intention to terminate its operations and liquidate its bank.</p>
                        <br></br>
                            <p>CENTRE has approximately $3.3 billion invested with Silicon Valley Bank, but it is unclear how much it will receive in return. As a result, the value of USDC has been de-pegged from the US dollar.</p>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                            <p><u>WHICH TESTNET SHOULD I USE?</u> (March 6, 2023)</p>
                        <br></br>
                        <br></br>
                            <p>The two public testnets that client developers are currently maintaining are Sepolia and Goerli. Sepolia is a network for contract and application developers to test their applications. The Goerli network lets protocol developers test network upgrades, and lets stakers test running validators.</p>
                        <br></br>
                        <br></br>
                            <img src={testnets} alt="Test Networks" width={800} height={150} />
                        <br></br>
                        <br></br>
                            <p>Meet --holesky, the first long-standing, merged-from-genesis, public Ethereum testnet. Holešky will replace Goerli as a staking, infrastructure and protocol-developer testnet in 2023. For testing decentralized applications, smart contracts, and other EVM functionality, please use Sepolia!</p>
                        <br></br>
                        <br></br>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
        
                            <p><u>MOST USED PROGRAMMING LANGUAGES</u> (February 27, 2023)</p>
                        <br></br>
                        <br></br>
                            <p>The Solidity Developer Survey 2022 results are out with some interesting statistics. Solidity marks the most used programming language for the survey audience (28.6%), closely followed by JavaScript (25.6%) and TypeScript (20.5%). </p>
                        <br></br>
                        <br></br>
                            <img src={languages} alt="Annual Energy Consumption" width={700} height={400} />
                        <br></br>
                        <br></br>
                            <p>More details and statistics here https://blog.soliditylang.org/2023/03/10/solidity-developer-survey-2022-results/.</p>
                        <br></br>
                        <br></br>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                            <p><u>FUN FACT</u> (February 20, 2023)</p>
                        <br></br>
                        <br></br>
                            <p>YouTube used over 175 times more energy watching Gangnam Style in 2019 than Ethereum uses per year.</p>
                        <br></br>
                        <br></br>
                            <img src={Annual_Energy_Consumption} alt="Annual Energy Consumption" width={500} height={500} />
                        <br></br>
                        <br></br>
                            <p>The chart above shows the estimated annual energy consumption in TWh/yr for various industries (retrieved in June 2022).</p>
                        <br></br>
                        <br></br>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                            <p><u>ERC-4337 CRYPTO WALLETS WILL ONBOARD THE NEXT 1 BILLION USERS TO WEB3</u> (February 13, 2023)</p>
                        <br></br>
                        <br></br>
                            <p>This is a new type of crypto wallet that gives you "the same features a bank would, without having to trust a bank."</p>
                        <br></br>
                        <br></br>
                            <p>Some interesting features would be:</p>
                        <br></br>
                            <li>Wallet Recovery: Recover your private keys with "social recovery".</li>
                        <br></br>
                            <li>Multi-Sign Transactions: Useful in organastions requiring multiple signatures for an approval.</li>
                        <br></br>
                            <li>Bundle Transactions: Approve and complete the listing of an NFT from a new collection in the same transaction.</li>
                        <br></br>
                            <li>Customer Limits & 2FA: Password required for a transaction above a certain amount.</li>
                        <br></br>
                            <li>Gasless & Sponsored Transactions: No more need to pay gas for every transaction.</li>
                        <br></br>
                        <br></br>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                            <p><u>USING CUSTOM ERRORS INSTEAD OF REVERT STRINGS (SAVE HUGE DEPLOYMENT GAS COSTS)</u> (February 6, 2023)</p>
                        <br></br>
                        <br></br>
                            <p>Solidity developers often neglect custom errors, despite their usefulness. Solidity 0.8.4 introduced them as a cost-effective way to display errors, replacing the expensive revert strings used before.</p>
                        <br></br>
                        <br></br>
                            <p>You can define errors with the error keyword, the type of errors you can define are:</p>
                        <br></br>
                            <li>Errors</li>
                        <br></br>
                            <li>Errors with parameters</li>
                        <br></br>
                            <li>Errors in depth</li>
                        <br></br>
                        <br></br>
                            <p>You can place the error condition in an if condition and reverting the transaction, errors can be declared inside or outside the smart contract scope.</p>
                        <br></br>
                        <br></br>
                            <p>The following code shows how to use custom errors in solidity and what's the gas difference in both of them.</p>
                        <br></br>
                        <br></br>
                            <img src={Gas} alt="Gas" width={500} height={500} />
                        <br></br>
                        <br></br>
                            <p>Deployment Gas Costs:</p>
                        <br></br>
                            <p>Contract - RequireErrors: 230288 gas</p>
                            <p>Contract - CustomError: 201559 gas</p>
                        <br></br>
                            <p>Error Gas Cost When Condition is Met:</p>
                        <br></br>
                            <p>function requireError(): 23642</p>
                            <p>function customError(): 23388</p>
                        <br></br>
                        <br></br>
                            <p>Custom Errors will save huge deployment gas costs for you and you'll be able to write much more lines of code.</p>
                        <br></br>
                        <br></br>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                            <p><u>WHAT EXACTLY HAPPENS WHEN YOU DESTRUCT A SOLIDITY SMART CONTRACT?🔥</u> (February 1, 2023)</p>
                        <br></br>
                        <br></br>
                            <p>The contract stops execution in its current scope (number++ is not executed after the selfdestruct was initiated), and flags the contract for deletion. It doesn’t get deleted right away, so you can still call its functions (in this case the autogenerated number() function).</p>
                        <br></br>
                        <br></br>
                            <p>The native selfdestruct() function takes one argument of type “address payable” to which it’s going to send all native tokens (ETH on Ethereum, BNB on Binance Smart Chain, MATIC on Polygon, …) that the contract holds.</p>
                        <br></br>
                        <br></br>
                            <p>Since this is not a regular transfer, it does not invoke the receive() nor fallback() functions on the recipient contract. So you effectively can force send ETH to a contract this way.</p>
                        <br></br>
                        <br></br>
                            <p>Non-native tokens (ERC-20, NFTs, etc.) are stored in their respective contracts, making it impossible for a contract to know which tokens it owns. If a contract is destroyed, all non-native tokens held by the contract address become inaccessible due to the absence of a private key. This is crucial to consider before implementing the destruct feature in your contracts.</p>
                        <br></br>
                        <br></br>
                            <img src={Self_destruct} alt="Gas" width={500} height={500} />
                        <br></br>
                        <br></br>
                            <p>Solidity version 0.8.18 has deprecated the selfdestruct() function, which is intended to be replaced by SENDALL opcode. The new function, likely to be called sendall(), will send all native tokens to a designated address, but will not remove the contract bytecode. Additional details are available in the unfinished EIP found here: https://lnkd.in/evC7zYnch.</p>
                        <br></br>
                        <br></br>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                            <p align="center">Thank you!</p>

                    <footer align="center" className="footer">

                            <p><small>This Web 3.0 portfolio website is proudly hosted on IPFS</small></p>

                        <br></br>

                            <p><small>Copyright © 2023 Vidhan Mangla.</small></p>

                    </footer>

        </section>

    )

}

export default Blog
