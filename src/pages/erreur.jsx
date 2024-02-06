import { Link } from 'react-router-dom';
import '../styles/erreur.scss';

function Erreur() {
    return (
        <main className='main-erreur'>
            <p className='code-erreur'>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Erreur