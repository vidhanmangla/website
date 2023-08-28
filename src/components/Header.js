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
                                    <small>📍 Guildford, England, United Kingdom</small>
                </div>
        </section>
    )
    
}

export default Header
