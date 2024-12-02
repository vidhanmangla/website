const Projects = () => {

    return (
        <div align="center" className="projects">
            <h2 align="center">Technical Projects</h2>
            <div className="projects__cards">
                <div className="projects__card">
                    <h3>Tokenised Mortgage-Backed Securities & Platform</h3>
                    <p>Developed a Proof of Concept to tokenise mortgage-backed securities, providing asset-backed security tokens on a secure platform.</p>
                </div>
                
                <div className="projects__card">
                    <h3>Private Ethereum Blockchain Network</h3>
                    <p>Configured a private Ethereum network on Kubernetes with custom blockchain explorer integration.</p>
                </div>
                
                <div className="projects__card">
                    <h3>Decentralised Oracle Network</h3>
                    <p>Built a decentralised oracle network that extends Chainlink functionality, deployed on a private blockchain.</p>
                </div>
                
                <div className="projects__card">
                    <h3>On-Chain Direct Debit Payments System</h3>
                    <p>Created a secure direct debit system using smart contracts and custom oracles for off-chain bank payments.</p>
                </div>
            </div>
        </div>
    )

}

export default Projects
