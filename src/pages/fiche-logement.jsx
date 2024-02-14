import React from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '@components/Carrousel';
import logements from '@datas/logements.json';
import '@styles/infoLogement.scss';
import InfoLogement from '@components/InfoLogement';

function FicheLogement() {
    const { id } = useParams(); //  extrait le paramètre "id" de l'URL
    const logement = logements.find(element => element.id === id); // trouve l'élément (logement) du tableau "logements" ayant le même ID que celui extrait de l'URL



    return (
        <main>
            <Carrousel props={logement} /> {/* affiche le composant et lui passe le logement en tant que prop */}
            <InfoLogement 
                title={logement.title}
                location={logement.location}
                host={logement.host}
                tags={logement.tags}
                rating={logement.rating}
                description={logement.description}
                equipments={logement.equipments}/> 
        </main>
    );
}

export default FicheLogement;