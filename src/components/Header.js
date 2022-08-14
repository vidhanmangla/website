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
                        <small><a href ="https://link.storjshare.io/jwe4wdvvkmzfy4cvqbaevx2vuoya/jobs-material%2FResume.pdf" attributes-list>Resume</a></small>
                <br></br>
                <br></br>
                        <small><a href ="https://link.storjshare.io/jvffj4ubmxxsanzynsgjb76zpx5q/jobs-material%2FCover%20Letter.pdf" attributes-list>Cover Letter</a></small>
                <br></br>
                <br></br>
                        <small>This Web 3.0 portfolio website is proudly hosted on IPFS</small>
            </div>
        </section>
    );
}

export default Header;