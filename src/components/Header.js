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
                        <small><a href ="https://link.storjshare.io/jw3hxvud6x3ph4c3ikwdld45zrdq/jobs-material%2FResume.pdf" attributes-list>Resume</a></small>
                <br></br>
                <br></br>
                        <small><a href ="https://link.storjshare.io/jxhazdjrpe7uk6ylvwqwawobykcq/jobs-material%2FCover%20Letter.pdf" attributes-list>Cover Letter</a></small>
            </div>
        </section>
    );
}

export default Header;