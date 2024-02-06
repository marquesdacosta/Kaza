import { Link } from 'react-router-dom';
import '../styles/header.scss';
import logo from '../assets/logoHeader.png';

function Header(){
    return (
        <header>
            <div>
        <img src={logo} alt="logo" />
            </div>
            <nav className='navbar'>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header