import Certified from '../assets/Certified.png';
import BMC from '../assets/BMC.png';


const Certifications = () => {
    
    return (

        <section align="center" className='certifications'>

            <h2 align="center">Certifications</h2>

                <p>

                            <p align="center"><a href="https://www.credential.net/270c2948-0889-4534-a811-f6fad25a4c72#gs.lrhojt" target="_blank">Certified Blockchain Developer™</a> | <a href="https://portal.bloombergforeducation.com/certificates/4cntDQVooA9Dn84gLpyV1Mae" target="_blank">Bloomberg Market Concepts</a></p>

                    <br></br>

                            <img align="center" src={Certified} alt="Certified Blockchain Developer™" width="500" height="400"></img>
                            <img align="center" src={BMC} alt="Bloomberg Market Concepts" width="560" height="400"></img>

                </p>

        </section>
        
    );
    
}

export default Certifications;
