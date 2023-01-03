import profile from '../assets/profile.png';


const Header = () => {
    
    return (

        <section className='header'>

            <img src={profile} alt="Vidhan Mangla" />

                <div className='header__content'>

                    <h1>Hi, I'm Vidhan</h1>

                        <p>
                            Smart Contract, Blockchain & Web3 Developer
                        </p>
                    
                            <br></br>

                                <a href='mailto:vidhanmangla@gmail.com' target="_blank" className='button'>Email</a>
                                <a href='https://calendly.com/vidhanmangla/meeting-with-vidhan' target="_blank" className='button'>Meeting</a>
                            
                            <br></br>
                            <br></br>
                            
                                <small><a href ="https://link.storjshare.io/jw6hwno3jbjpb7cr4hj4jygm5v3a/jobs-material%2FResume.pdf" target="_blank" attributes-list>Resume</a></small>
                            
                            <br></br>   
                            
                                <small><a href ="https://link.storjshare.io/jxvderozlil4gzibashilkuwduwa/jobs-material%2FCover%20Letter.pdf" target="_blank" attributes-list>Covering Letter</a></small>
                            
                            <br></br>
                            <br></br>
                            
                                <small>📍 London, England, United Kingdom</small>
                                
                </div>

        </section>
        
    );
    
}

export default Header;
