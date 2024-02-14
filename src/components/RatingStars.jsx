import React from 'react';
import etoile_pleine from '../assets/etoile_pleine.png';
import etoile_vide from '../assets/etoile_vide.png';

function RatingStars({ rating }) {
    const filledStars = parseInt(rating); // Nombre d'étoiles remplies basé sur la note
    const emptyStars = 5 - filledStars; // Nombre d'étoiles vides

    const stars = []; // Tableau pour stocker les étoiles

    // Générer les étoiles remplies avec une clé unique pour chaque étoile
    for (let i = 0; i < filledStars; i++) {
        stars.push(<img src={etoile_pleine} alt="etoile_pleine" key={`filled_${i}`}/>);
    }

    // Générer les étoiles vides avec une clé unique pour chaque étoile
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<img src={etoile_vide} alt='etoile_vide' key={`empty_${i}`}/>);
    }

    return <div className='rating'>{stars}</div>;
}

export default RatingStars;

