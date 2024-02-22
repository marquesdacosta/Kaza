import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '@styles/header.scss';
import logo from '../assets/logoHeader.png';

function Header() {
    const location = useLocation();

    // Récupérer le nom de la page à partir de l'URL
    const currentPage = location.pathname.split('/')[1];

    return (
        <header>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <nav className='navbar'>
                <Link to="/" className={currentPage === '' ? 'active' : ''}>Accueil</Link>
                <Link to="/a-propos" className={currentPage === 'a-propos' ? 'active' : ''}>A Propos</Link>
            </nav>
        </header>
    );
}

export default Header;
