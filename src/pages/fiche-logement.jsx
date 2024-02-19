import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carrousel from '@components/Carrousel';
import logements from '@datas/logements.json';
import '@styles/infoLogement.scss';
import InfoLogement from '@components/InfoLogement';

function FicheLogement() {
    const { id } = useParams(); //  extrait le paramètre "id" de l'URL
    const logement = logements.find(element => element.id === id); // trouve l'élément (logement) du tableau "logements" ayant le même ID que celui extrait de l'URL
    const navigate = useNavigate(); // Utilise navigate pour rediriger vers une autre page

    useEffect(() => {
        // Vérifie si l'ID du logement est valide
        if (!logement) {
            // Si l'ID du logement n'existe pas, redirige vers la page d'erreur
            navigate('/erreur');
        }
    }, [logement, navigate]);

    if (!logement) {
        // Si l'ID du logement n'existe pas, ne rend rien ici car nous avons effectué une redirection
        return null;
    }



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