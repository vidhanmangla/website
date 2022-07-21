import jizzyswap from '../assets/jizzyswap.png';
import nft_marketplace from '../assets/nft_marketplace.png';
import raffle from '../assets/raffle.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Cryptocurrency Swap Exchange</h3>
                    <img src={jizzyswap} alt="Jizzy Swap Page" />
                    <p>
                        A full-stack Blockchain application.
                    <br></br>
                        An instant cryptocurrency exchange powered by the Ethereum Blockchain.
                    </p>
                    <p>
                        Users to buy and sell JIZZY tokens at a fixed price against ether.
                    </p>
                    <p>
                        Live on the Rinkeby and Goerli testnet.
                    </p>
                    <p>
                    <strong>Add JIZZY Token to your wallet:</strong>
                    <br></br>
                    <br></br>
                    <strong>Network:</strong> Rinkeby Test Network
                    <br></br>
                    <strong>Contract Address:</strong> 0xFd6d1e17098C49e37A1974dCd898<br></br>F76b7E19bcd2
                    <br></br>
                    <br></br>
                    <strong>Network:</strong> Goerli Test Network
                    <br></br>
                    <strong>Contract Address:</strong> 0xb35f194c79D55412f636f307AA78E<br></br>1327b340BAA
                    </p>

                    <a href="https://celadon-banoffee-0eef4e.netlify.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla/jizzyb_ether_swap_exchange" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Decentralised Smart Contract Lottery</h3>
                    <img src={raffle} alt="Raffle Page" />
                    <p>
                        A full-stack Blockchain application.
                        <br></br>
                        A fair, verifiably random, autonomous, decentralised lottery powered by
                        the Ethereum Blockchain and Chainlink's Oracle.
                    </p>
                    <p>
                        It uses Chainlink Verifiable Randomness Function (VRF) and Chainlink Keepers to select a random winner. 
                    </p>
                    <p>
                        Live on the Rinkeby testnet.
                    </p>

                    <a href="https://brilliant-raindrop-fc5139.netlify.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla/lottery_raffle" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Non-fungible Token (NFT) Marketplace</h3>
                    <img src={nft_marketplace} alt="NFT Page" />
                    <p>
                        An NFT Marketplace like OpenSea created using Blockchain development fundamentals. Users can buy and sell NFTs with Ether and view the ones they’ve purchased or listed on the marketplace.
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla/nft-marketplace" target="_blank" className="button">Code</a>
                </div>

            </div>
        </section>
    );
}

export default Projects;