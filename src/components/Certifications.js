import Certified from '../assets/Certified.png';
import BMC from '../assets/BMC.png';


const Certifications = () => {
    
    return (

        <section align="center" className='certifications'>

            <h2 align="center">Certifications</h2>

                <p>

                            <p align="center">Certified Blockchain Developer™ | Bloomberg Market Concepts</p>

                    <br></br>

                            <img align="center" src={Certified} alt="Certified Blockchain Developer™" width="548.6" height="400"></img>

                            <img align="center" src={BMC} alt="Bloomberg Market Concepts" width="548.6" height="400"></img>
                
                </p>

        </section>
        
    );
    
}

export default Certifications;
