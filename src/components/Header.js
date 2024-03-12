import profile from '../assets/profile.png'


const Header = () => {
    
    return (
        <section className='header'>
            <img src={profile} alt="Vidhan Mangla" />
                <div className='header__content'>
                    <h1>Hi, I'm Vidhan</h1>
                        <p>
                            Smart Contract, Blockchain & Web3 Engineer
                        </p>
                            <br></br>

                                    <a href='mailto:vidhanmangla@gmail.com' target="_blank" rel="noreferrer" className='button'>Email</a>
                                    <a href='https://calendly.com/vidhanmangla/meeting-with-vidhan' target="_blank" rel="noreferrer" className='button'>Meeting</a>
                            <br></br>
                            <br></br>
                                    <small><a href='https://link.storjshare.io/s/jw4nyfnj6iotmxdylpdhqwpetj2a/jobs-material%2FResume.pdf' target="_blank" rel="noreferrer">Resume</a></small>
                            <br></br>
                                    <small><a href='https://link.storjshare.io/s/jux7pgcwqd4etasc4luvfil55pjq/jobs-material%2FCover%20Letter.pdf' target="_blank" rel="noreferrer">Cover Letter</a></small>
                            <br></br>
                            <br></br>
                                    <small>📍 London, England, United Kingdom</small>
                </div>
        </section>
    )
    
}

export default Header