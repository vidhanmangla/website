// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Cryptocurrency Swap Exchange</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>A full-stack blockchain application. An instant cryptocurrency exchange powered by the Ethereum blockchain. It allows users to buy and sell JIZZY tokens at a fixed price against ether.
                    </p>

                    <a href="https://euphonious-axolotl-704b66.netlify.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla/Cryptocurrency-Swap-Exchange" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Cryptocurrency Swap Exchange</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>A full-stack blockchain application. An instant cryptocurrency exchange powered by the Ethereum blockchain. It allows users to buy and sell JIZZY tokens at a fixed price against ether.
                    </p>

                    <a href="https://euphonious-axolotl-704b66.netlify.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla/Cryptocurrency-Swap-Exchange" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Cryptocurrency Swap Exchange</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>A full-stack blockchain application. An instant cryptocurrency exchange powered by the Ethereum blockchain. It allows users to buy and sell JIZZY tokens at a fixed price against ether.
                    </p>

                    <a href="https://euphonious-axolotl-704b66.netlify.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/vidhanmangla/Cryptocurrency-Swap-Exchange" target="_blank" className="button">Code</a>
                </div>
                
            </div>
        </section>
    );
}

export default Projects;