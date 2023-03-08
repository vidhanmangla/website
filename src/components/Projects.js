import jizzyswap from '../assets/jizzyswap.png'
import marketplace from '../assets/marketplace.png'
import raffle from '../assets/raffle.png'
import nfts from '../assets/nfts.png'
import dao from '../assets/dao.png'
import DeFi_Bank from '../assets/DeFi_Bank.png'
import blockchain from '../assets/blockchain.png'
import learn_blockchain from '../assets/learn_blockchain.png'
import keys from '../assets/keys.png'


const Projects = () => {
    
    return (

        <section align="center" className="projects">
            
            <h2>Technical Projects</h2>

                    <div className="projects__cards">


                        <div className="projects__card">

                            <h3>Blockchain Demo</h3>
                            
                                <img src={learn_blockchain} alt="Learn_Blockchain" />
                            
                                    <p>
                                        A web-based demonstration of blockchain concepts.
                                    </p>

                                <a align="center" href="https://github.com/vidhanmangla/blockchain-demo" target="_blank" rel="noreferrer" className="button">Learn PoW Blockchain</a>

                        </div>
                        

                        <div className="projects__card">

                            <h3>Public / Private Keys</h3>
                            
                                <img src={keys} alt="Keys" />
                                    <p>
                                        A web-based demonstration of public/private key pair concepts.
                                    </p>

                                <a align="center" href="https://github.com/vidhanmangla/public-private-key-demo" target="_blank" rel="noreferrer" className="button">Learn Crypto Signature</a>

                        </div>

                        
                        <div className="projects__card">

                            <h3>Blockchain</h3>
                            
                                <img src={blockchain} alt="Blockchain" />
                            
                                    <p>
                                        A minimalistic blockchain using proof-of-work consensus based on Bitcoin.
                                    </p>

                                <a align="center" href="https://github.com/vidhanmangla/Jizzy_Blockchain" target="_blank" rel="noreferrer" className="button">Code</a>

                        </div>


                        <div className="projects__card">

                            <h3>Liquidity Farming</h3>
    
                                <img src={DeFi_Bank} alt="DeFi Bank" />
        
                                    <p>
                                        Users can earn rewards by staking their stablecoin tokens.
                                    </p>
                                    <p>
                                        Live on the Goerli testnet.
                                    </p>

                                <a align="center" href="https://jocular-dolphin-7b0f16.netlify.app/" target="_blank" rel="noreferrer" className="button">Go to website</a>

                        </div>


                        <div className="projects__card">

                            <h3>Crypto Exchange</h3>
                            
                                <img src={jizzyswap} alt="Jizzy Swap Page" />
                            
                                    <p>
                                        An instant cryptocurrency exchange powered by the Ethereum blockchain.
                                    </p>
                                    <p>
                                        Live on the Goerli testnet.
                                    </p>

                                <a align="center" href="https://luminous-sunflower-a18391.netlify.app/" target="_blank" rel="noreferrer" className="button">Go to website</a>
                    
                        </div>


                        <div className="projects__card">

                            <h3>Lottery!</h3>
                            
                                <img src={raffle} alt="Raffle Page" />
                            
                                    <p>
                                        Lottery powered by the Ethereum blockchain and Chainlink oracle.
                                    </p>
                                    <p>
                                        Live on the Goerli testnet.
                                    </p>

                                <a align="center" href="https://master.d5615dcxchqd7.amplifyapp.com/" target="_blank" rel="noreferrer" className="button">Go to website</a>
                    
                        </div>


                        <div className="projects__card">

                            <h3>Non Fungible Tokens</h3>
                            
                                <img src={nfts} alt="NFTs" />
                            
                                    <p>
                                        A collection of NFT products created by Vidhan.
                                    </p>
                                    <p>
                                        Available on the marketplace soon.
                                    </p>

                                <a align="center" href="" target="_blank" rel="noreferrer" className="button">Block Explorer (Soon)</a>
                                <a align="center" href="" target="_blank" rel="noreferrer" className="button">Marketplace (Soon)</a>
                        
                        </div>


                        <div className="projects__card">

                            <h3>Marketplace</h3>
                            
                                <img src={marketplace} alt="Marketplace" />
                            
                                    <p>
                                        A web3 marketplace to buy, sell and trade digital products.
                                    </p>
                                    <p>
                                        Live on Ethereum mainnet.
                                    </p>

                                <a href="https://main.dimwf2v42my8e.amplifyapp.com/" target="_blank" rel="noreferrer" className="button">Go to website</a>

                        </div>


                        <div className="projects__card">

                            <h3>Revolutionary DAO</h3>
                            
                                <img src={dao} alt="DAO" />
                            
                                    <p>
                                        A decentralised autonomous organisation inspired by Compound which has 100% on-chain voting and governance. 
                                    </p>
                            
                                <a align="center" href="https://github.com/vidhanmangla/decentralised-autonomous-organisation" target="_blank" rel="noreferrer" className="button">Code</a>
                                <a align="center" href="" target="_blank" rel="noreferrer" className="button">Live soon</a>

                        </div>


                    </div>

        </section>

    )

}

export default Projects
