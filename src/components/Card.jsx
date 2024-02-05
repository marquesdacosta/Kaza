import '../styles/card.scss';
import logements from '../../datas/logements.json';

function Card (){

    return (
    logements.map(logement => (
        <div className='card' key={logement.id}>
            <img src={logement.cover} alt={logement.title} />
            <div className='card__title'>
                <h1>{logement.title}</h1>
            </div>
        </div>
    ))
)
}

export default Card