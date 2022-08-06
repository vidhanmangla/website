import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Vidhan Mangla" />

            <div className='header__content'>
                <h1>Hi, I'm Vidhan</h1>
                <p>
                Smart Contract & Blockchain Developer 
                </p>
                <br></br>
                        <a href='mailto:vidhanmangla@gmail.com' className='button'>Get in Touch!</a>
                <br></br>
                <br></br>
                <br></br>
                        <small><a href ="https://link.storjshare.io/jurv5k4od74h7wr2dlf4vqonowfq/jobs-material%2FResume.pdf" attributes-list>Resume</a></small>
                <br></br>
                <br></br>
                        <small><a href ="https://link.storjshare.io/jvyvuek267yl5pyleas36citupda/jobs-material%2FCover%20Letter.pdf" attributes-list>Cover Letter</a></small>
            </div>
        </section>
    );
}

export default Header;