import marketplace from '../assets/marketplace.png'
import raffle from '../assets/raffle.png'
import zkp from '../assets/zkp.png'


const Projects = () => {
    
    return (
        <section align="center" className="projects">
            <h2>Technical Projects</h2>
                    <div className="projects__cards">
                        <div className="projects__card">
                            <h3>ZK-SNARK and ZK-STARK</h3>
                                <img src={zkp} alt="zk proof" />
                                    <p>
                                        Stealth project.
                                    </p>
                                <a align="center" href="mailto:vidhanmangla@gmail.com" target="_blank" rel="noreferrer" className="button">Contact To Enquire</a>
                        </div>
                        <div className="projects__card">
                            <h3>Lottery!</h3>
                                <img src={raffle} alt="Raffle Page" />
                                    <p>
                                        Powered by Ethereum and Chainlink.
                                    </p>
                                    <p>
                                        Available on the Sepolia testnet.
                                    </p>
                                <a align="center" href="https://master.d13r93vvjico63.amplifyapp.com/" target="_blank" rel="noreferrer" className="button">Go To Website</a>
                        </div>
                        <div className="projects__card">
                            <h3>Marketplace</h3>
                                <img src={marketplace} alt="Marketplace" />
                                    <p>
                                        Web3 marketplace to buy, sell and trade digital products on Ethereum mainnet.
                                    </p>
                                <a href="https://main.d2bivn1wue16sy.amplifyapp.com/" target="_blank" rel="noreferrer" className="button">Go To Website</a>
                        </div>
                    </div>
        </section>
    )

}

export default Projects
