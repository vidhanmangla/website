import zkp from '../assets/zkp.png'
import blockchain from '../assets/blockchain.png'
import oracle from '../assets/oracle.png'


const Projects = () => {
    
    return (
        <section align="center" className="projects">
            <h2>Technical Projects</h2>
                    <div className="projects__cards">
                        <div className="projects__card">
                            <h3>Private Blockchain Networks</h3>
                                <img src={blockchain} alt="Raffle Page" />
                                    <p>
                                        Complete setup (EVM-compatible blockchains).
                                    </p>
                                <a align="center" href="mailto:vidhanmangla@gmail.com" target="_blank" rel="noreferrer" className="button">Contact To Enquire</a>
                        </div>

                        <div className="projects__card">
                            <h3>Decentralized Network of Oracles</h3>
                                <img src={oracle} alt="oracle" />
                                    <p>
                                        Complete setup (EVM-compatible blockchains).
                                    </p>
                                <a align="center" href="mailto:vidhanmangla@gmail.com" target="_blank" rel="noreferrer" className="button">Contact To Enquire</a>
                        </div>

                        <div className="projects__card">
                            <h3>ZK-SNARK and ZK-STARK</h3>
                                <img src={zkp} alt="zk proof" />
                                    <p>
                                        Stealth projects based on zk tech.
                                    </p>
                                <a align="center" href="mailto:vidhanmangla@gmail.com" target="_blank" rel="noreferrer" className="button">Contact To Enquire</a>
                        </div>
                    </div>
        </section>
    )

}

export default Projects