import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import logements from '../../datas/logements.json';

function FicheLogement() {
    const { id } = useParams();
    const logement = logements.find(logement => logement.id === id);

    return (
        <main>
            <Carrousel logement={logement} />
        </main>
    );
}

export default FicheLogement;