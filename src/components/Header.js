// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Vidhan Mangla" />

            <div className='header__content'>
                <h1>Hi, I'm Vidhan</h1>
                <p>Smart Contract Developer</p>
                <a href='mailto:vidhanmangla@gmail.com' className='button'>Get In Touch! :)</a>
            </div>
        </section>
    );
}

export default Header;