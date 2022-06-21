// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Vidhan Mangla" />

            <div className='header__content'>
                <h1>Hi, I'm Vidhan</h1>
                <p>Smart Contract Developer</p>
                <button className='button'>Get In Touch! :)</button>
            </div>
        </section>
    );
}

export default Header;