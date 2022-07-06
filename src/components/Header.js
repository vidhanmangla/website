// Import Assets
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
                <a href='mailto:vidhanmangla@gmail.com' className='button'>Get in Touch! :)</a>
            </div>
        </section>
    );
}

export default Header;
