import jizzyswap from '../assets/jizzyswap.png';
import nft_marketplace from '../assets/nft_marketplace.png';
import raffle from '../assets/raffle.png';
import nfts from '../assets/nfts.png';
import dao from '../assets/dao.png';
import DeFi_Bank from '../assets/DeFi_Bank.png';
import blockchain from '../assets/blockchain.png';
import learn_blockchain from '../assets/learn_blockchain.png';
import keys from '../assets/keys.png';

const Projects = () => {
    return (

        <section className="projects">
            
            <h2>Personal Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">

                    <h3>CryptoSwap</h3>
                    <img src={jizzyswap} alt="Jizzy Swap Page" />
                    <p>
                        An instant cryptocurrency exchange powered by the Ethereum Blockchain.
                    </p>
                    <p>
                        Users can buy and sell ERC-20 tokens at a fixed price against Ether.
                    </p>
                    <p>
                        Live on the Rinkeby and Goerli testnet.
                    </p>

                    <a href="https://celadon-banoffee-0eef4e.netlify.app/" target="_blank" className="button">Go to website</a>
             
                </div>

                <div className="projects__card">

                    <h3>Blockchain Demo</h3>
                    <img src={learn_blockchain} alt="Learn_Blockchain" />
                    <p>
                        A web-based demo of blockchain concepts.
                    </p>
                    <p>
                        A very basic visual introduction to the concepts behind a blockchain using an interactive web demo.
                    </p>

                    <a href="https://github.com/vidhanmangla/blockchain-demo" target="_blank" className="button">Learn Blockchain</a>

                </div>

                <div className="projects__card">

                    <h3>Liquidity Farming</h3>
                    <img src={DeFi_Bank} alt="DeFi Bank" />
                    <p>
                        Users can earn staking rewards by staking their mDAI stablecoin tokens for a certain period of time.
                    </p>
                    <p>
                        Live on the Goerli testnet.
                    </p>

                    <a href="https://jocular-dolphin-7b0f16.netlify.app/" target="_blank" className="button">Go to website</a>
              
                </div>

                <div className="projects__card">

                    <h3>DeFi Lottery</h3>
                    <img src={raffle} alt="Raffle Page" />
                    <p>
                        A decentralised lottery.
                    </p>

                    <a href="" target="_blank" className="button">Website going live soon</a>
               
                </div>

                <div className="projects__card">

                    <h3>Non Fungible Tokens</h3>
                    <img src={nfts} alt="NFTs" />
                    <p>
                        ERC-721 non-fungible tokens (NFTs).
                    </p>
                    <p>
                        Deployed on the Rinkeby testnet.
                    </p>

                    <a href="https://rinkeby.etherscan.io/address/0xd40D39Da6E9331F29A8E4a40425339F11E39FA06" target="_blank" className="button">Block Explorer</a>
                    <a href="https://testnets.opensea.io/0x430560948700B45adaC86Af5F4430631D48f1cf7" target="_blank" className="button">OpenSea</a>
                
                </div>

                <div className="projects__card">

                    <h3>NFT Marketplace</h3>
                    <img src={nft_marketplace} alt="NFT Page" />
                    <p>
                        An NFT Marketplace like OpenSea.
                    </p>
                    <p>
                        Users can buy and sell NFTs with Ether and view the ones they’ve purchased or listed on the marketplace.
                    </p>
                    
                    <a href="" target="_blank" className="button">Website going live soon</a>

                </div>

                <div className="projects__card">

                    <h3>PoW Blockchain</h3>
                    <img src={blockchain} alt="Blockchain" />
                    <p>
                        Created a blockchain first and then added proof-of-work consensus to it to verify the integrity of the blockchain and edit how fast new blocks can be added to the blockchain by changing the difficulty.
                    </p>

                    <a href="" target="_blank" className="button">Code is private</a>

                </div>

                <div className="projects__card">

                    <h3>DAO</h3>
                    <img src={dao} alt="DAO" />
                    <p>
                        A Decentralised Autonomous Organisation inspired by Compound which has 100% on-chain voting and governance. 
                    </p>
                    
                    <a href="" target="_blank" className="button">Code is private</a>

                </div>

                <div className="projects__card">

                    <h3>Public / Private Keys</h3>
                    <img src={keys} alt="Keys" />
                    <p>
                        A web-based demonstration of public / private key pair concepts.
                    </p>
                    <p>
                        A very basic visual introduction to the concepts behind a public / private key pair, signing and their use in a blockchain context.
                    </p>
                    
                    <a href="https://github.com/vidhanmangla/public-private-key-demo" target="_blank" className="button">Learn</a>

                </div>

            </div>

        </section>
        
    );
}

export default Projects;
