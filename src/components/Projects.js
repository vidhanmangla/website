import marketplace from '../assets/marketplace.png'
import raffle from '../assets/raffle.png'
import nfts from '../assets/nfts.png'


const Projects = () => {
    
    return (

        <section align="center" className="projects">
            
            <h2>Technical Projects</h2>

                    <div className="projects__cards">


                        <div className="projects__card">

                            <h3>Lottery!</h3>
                            
                                <img src={raffle} alt="Raffle Page" />
                            
                                    <p>
                                        Lottery powered by the Ethereum blockchain and Chainlink oracle.
                                    </p>
                                    <p>
                                        Available on Goerli and Sepolia testnet.
                                    </p>

                                <a align="center" href="https://master.d13r93vvjico63.amplifyapp.com/" target="_blank" rel="noreferrer" className="button">Go to website</a>
                    
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

                                <a align="center" href="https://main.d2bivn1wue16sy.amplifyapp.com/" target="_blank" rel="noreferrer" className="button">Marketplace (Soon)</a>
                        
                        </div>


                        <div className="projects__card">

                            <h3>Marketplace</h3>
                            
                                <img src={marketplace} alt="Marketplace" />
                            
                                    <p>
                                        A web3 marketplace to buy, sell and trade digital products.
                                    </p>
                                    <p>
                                        Available on Ethereum mainnet.
                                    </p>

                                <a href="https://main.d2bivn1wue16sy.amplifyapp.com/" target="_blank" rel="noreferrer" className="button">Go to website</a>

                        </div>


                    </div>

        </section>

    )

}

export default Projects
