import BMC from '../assets/BMC.png';
import Blockchain_Council from '../assets/Blockchain_Council.png';


const Certifications = () => {
    
    return (

        <section align="center" className='certifications'>

            <h2 align="center">Certifications</h2>

            <p>

                        <p align="center">Bloomberg Market Concepts | Certified Blockchain Developer</p>
                <br></br>
                        <img align="center" src={BMC} alt="Bloomberg Market Concepts" width="500" height="400"></img>
                
                        <img align="center" src={Blockchain_Council} alt="Blockchain_Council" width="500" height="400"></img>
            
            </p>

        </section>
        
    );
}

export default Certifications;
