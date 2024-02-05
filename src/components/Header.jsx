import '../styles/header.scss';
import logo from '../assets/logoHeader.png';

function Header(){
    return (
        <header>
            <div>
        <img src={logo} alt="logo" />
            </div>
            <div className='navbar'>
        <p>Accueil</p>
        <p>A propos</p>
            </div>
        </header>
    )
}

export default Header