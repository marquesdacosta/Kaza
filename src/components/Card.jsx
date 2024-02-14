import '@styles/card.scss';
import { Link } from 'react-router-dom';

function Card({ imageUrl, title, link }) {
    return (
        <Link to={link}> {/* dirige vers la page du logement correspondant à l'ID du logement. */}
            <div className='card'>
                <img src={imageUrl} alt={title} />
                <div className='card__title'>
                    <h1>{title}</h1>
                </div>
            </div>
        </Link>
    );
}

export default Card;