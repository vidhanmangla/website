import jizzyswap from '../assets/jizzyswap.png';
import nft_marketplace from '../assets/nft_marketplace.png';
import raffle from '../assets/raffle.png';
import nfts from '../assets/nfts.png';
import dao from '../assets/dao.png';
import DeFi_Bank from '../assets/DeFi_Bank.png';
import blockchain from '../assets/blockchain.png';
import learn_blockchain from '../assets/learn_blockchain.png';
import keys from '../assets/keys.png';
import asset_tokenisation from '../assets/asset_tokenisation.png';
import block_explorer from '../assets/block_explorer.png';
import wallet from '../assets/wallet.png';
import video_sharing from '../assets/video_sharing.png';

const Projects = () => {
    return (

        <section className="projects">
            
            <h2>Personal Projects</h2>

            <div className="projects__cards">



                <div className="projects__card">

                    <h3>Blockchain Demo</h3>
                    <img src={learn_blockchain} alt="Learn_Blockchain" />
                    <p>
                        A web-based demonstration of blockchain concepts.
                    </p>
                    <p>
                        A basic visual introduction to the concepts behind a blockchain using an interactive web demo.
                    </p>

                    <a href="https://github.com/vidhanmangla/blockchain-demo" target="_blank" className="button">Learn PoW Blockchain</a>

                </div>


                <div className="projects__card">

                    <h3>Public / Private Keys</h3>
                    <img src={keys} alt="Keys" />
                    <p>
                        A web-based demonstration of public/private key pair concepts.
                    </p>
                    <p>
                        A basic visual introduction to the concepts behind a public/private key pair,
                        signing and their use.
                    </p>

                    <a href="https://github.com/vidhanmangla/public-private-key-demo" target="_blank" className="button">Learn Crypto Signature</a>

                </div>

                
                <div className="projects__card">

                    <h3>PoW Blockchain</h3>
                    <img src={blockchain} alt="Blockchain" />
                    <p>
                        A simple blockchain based on Bitcoin.
                    </p>
                    <p>
                        A blockchain with proof-of-work consensus to verify it's integrity.
                        Similar to Bitcoin, decrease mining speed by changing the difficulty.
                    </p>

                    <a href="" target="_blank" className="button">Code is private</a>

                </div>


                <div className="projects__card">

                    <h3>Crypto Exchange</h3>
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

                    <h3>Decentralised Lottery</h3>
                    <img src={raffle} alt="Raffle Page" />
                    <p>
                        A decentralised lottery powered by the Ethereum blockchain and Chainlink's oracle.
                    </p>
                    <p>
                        Participate and win prizes.
                    </p>

                    <a href="" target="_blank" className="button">Website going live soon</a>
               
                </div>

                <div className="projects__card">

                    <h3>Non Fungible Tokens</h3>
                    <img src={nfts} alt="NFTs" />
                    <p>
                        A collection of ERC-721, 721A and 1155 non-fungible tokens (NFTs).
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

                    <h3>DAO Project</h3>
                    <img src={dao} alt="DAO" />
                    <p>
                        A decentralised autonomous organisation inspired by Compound which has a 100% on-chain voting and governance. 
                    </p>
                    
                    <a href="" target="_blank" className="button">Code is private</a>

                </div>

                
                <div className="projects__card">

                    <h3>Asset Tokenisation</h3>
                    <img src={asset_tokenisation} alt="Asset Tokenisation" />
                    <p>
                        A platform enabling individuals and organisations to create a digital proof of ownership for real-world assets.
                    </p>
                    <p>
                        Users can trade these asset-backed tokens.
                    </p>
                    
                    <a href="" target="_blank" className="button">Website going live soon</a>

                </div>


                <div className="projects__card">

                    <h3>Block Explorer</h3>
                    <img src={block_explorer} alt="Block Explorer" />
                    <p>
                        A software based on Etherscan used for visualising blocks, transactions, and blockchain network metrics (e.g., average transaction fees, hashrates, block size, block difficulty).
                    </p>
                    <p>
                        
                    </p>
                    
                    <a href="" target="_blank" className="button">Website going live soon</a>

                </div>


                <div className="projects__card">

                    <h3>Crypto Wallet</h3>
                    <img src={wallet} alt="Crypto Wallet" />
                    <p>
                        A crypto wallet like MetaMask.
                    </p>
                    <p>
                        This wallet will store users’ public and private keys while providing an easy-to-use interface to manage crypto balances.
                    </p>
                    
                    <a href="" target="_blank" className="button">Website going live soon</a>

                </div>

                
                <div className="projects__card">

                    <h3>Decentralised Tube</h3>
                    <img src={video_sharing} alt="Video Sharing" />
                    <p>
                        A global online video sharing social media platform.
                    </p>
                    <p>
                        A decentralised video sharing platform which, unlike Google, does not steal user data.
                    </p>
                    
                    <a href="" target="_blank" className="button">Website going live soon</a>

                </div>



            </div>  

        </section>
        
    );
}

export default Projects;
