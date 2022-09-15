import jizzyswap from '../assets/jizzyswap.png';
import nft_marketplace from '../assets/nft_marketplace.png';
import raffle from '../assets/raffle.png';
import nfts from '../assets/nfts.png';
import dao from '../assets/dao.png';
import DeFi_Bank from '../assets/DeFi_Bank.png';

const Projects = () => {
    return (

        <section className="projects">
            
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">

                    <h3>Jizzy Crypto Swap</h3>
                    <img src={jizzyswap} alt="Jizzy Swap Page" />
                    <p>
                        An instant <strong>cryptocurrency exchange</strong> powered by the Ethereum Blockchain.
                    </p>
                    <p>
                        Users can buy and sell ERC-20 tokens at a fixed price against Ether.
                    </p>
                    <p>
                        Live on the Rinkeby and Goerli testnet.
                    </p>

                    <a href="https://celadon-banoffee-0eef4e.netlify.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla/jizzyb_ether_swap_exchange" target="_blank" className="button">Code</a>
             
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

                    <a href="https://jocular-dolphin-7b0f16.netlify.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla/decentralised-bank" target="_blank" className="button">Code</a>
              
                </div>

                <div className="projects__card">

                    <h3>DeFi Lottery</h3>
                    <img src={raffle} alt="Raffle Page" />
                    <p>
                        A fair, verifiably random, autonomous, decentralised lottery.
                        <br></br>
                        It uses Chainlink's Oracle to select a random winner.
                    </p>
                         
                    <p>
                        Live on the Rinkeby testnet.
                    </p>

                    <a href="https://brilliant-raindrop-fc5139.netlify.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla/lottery_raffle" target="_blank" className="button">Code</a>
               
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

                    <a href="https://rinkeby.etherscan.io/address/0xd40D39Da6E9331F29A8E4a40425339F11E39FA06" target="_blank" className="button">Etherscan</a>
                    <a href="https://github.com/vidhanmangla/jizzyB_nft" target="_blank" className="button">Code</a>
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
                    
                    <a href="https://github.com/vidhanmangla/nft-marketplace" target="_blank" className="button">Code</a>
                    <a href="https://github.com/vidhanmangla/nft_marketplace_fullstack_graph" target="_blank" className="button">Subgraph</a>

                </div>

                <div className="projects__card">

                    <h3>Decentralised Autonomous Organisation (DAO)</h3>
                    <img src={dao} alt="DAO" />
                    <p>
                        A Decentralised Autonomous Organisation inspired by Compound which has 100% on-chain voting and governance. 
                    </p>
                    
                    <a href="https://github.com/vidhanmangla/decentralised-autonomous-organisation" target="_blank" className="button">Code</a>

                </div>

            </div>

        </section>
        
    );
}

export default Projects;
