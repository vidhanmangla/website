import jizzyswap from '../assets/jizzyswap.png';
import nft_marketplace from '../assets/nft_marketplace.png';
import raffle from '../assets/raffle.png';
import nfts from '../assets/nfts.png';

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
                        Users can buy and sell ERC-20 tokens at a fixed price against Ether.
                    </p>
                    <p>
                        Live on the Rinkeby and Goerli testnet.
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
                    <h3>Non-fungible Tokens (NFTs)</h3>
                    <img src={nfts} alt="NFTs" />
                    <p>
                        Three ERC-721 Non-fungible tokens (NFTs).
                    </p>
                    <p>
                        Deployed on the Rinkeby testnet.
                    </p>

                    <a href="https://rinkeby.etherscan.io/address/0xd40D39Da6E9331F29A8E4a40425339F11E39FA06" target="_blank" className="button">Check on Etherscan</a>
                    <a href="https://github.com/vidhanmangla/jizzyB_nft" target="_blank" className="button">Code</a>
                    <a href="https://testnets.opensea.io/collection/dogie-2vlbsf4gb1" target="_blank" className="button">Check on OpenSea</a>
                </div>

                <div className="projects__card">
                    <h3>Non-fungible Token (NFT) Marketplace</h3>
                    <img src={nft_marketplace} alt="NFT Page" />
                    <p>
                        An NFT Marketplace like OpenSea created using Blockchain development fundamentals.
                    </p>
                    <p>
                    Users can buy and sell NFTs with Ether and view the ones they’ve purchased or listed on the marketplace.
                    </p>
                    <p>
                        Working on it...
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla/nft-marketplace" target="_blank" className="button">Code</a>
                </div>

            </div>
        </section>
    );
}

export default Projects;