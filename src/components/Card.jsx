import '../styles/card.scss';
import { Link } from 'react-router-dom';

function Card({ logement }) {
    return (
        <Link to={`/logement/${logement.id}`}>
            <div className='card'>
                <img src={logement.cover} alt={logement.title} />
                <div className='card__title'>
                    <h1>{logement.title}</h1>
                </div>
            </div>
        </Link>
    );
}

export default Card;