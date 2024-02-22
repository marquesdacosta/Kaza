import { Link } from 'react-router-dom';
import '@styles/erreur.scss';

function Erreur() {

    const ajouterBreakSiNecessaire = () => {
        // Récupére la largeur de la fenêtre
        const largeurFenetre = window.innerWidth;

        // Sélectionne le span dans le deuxième paragraphe dans le composant
        const spanDansParagraphe = document.querySelector('.main-erreur span');

        // Vérifier si le span existe
        if (spanDansParagraphe) {
            // Vérifier si la largeur est inférieure à 767px
            if (largeurFenetre < 768) {
                // Vérifier si un <br> n'a pas déjà été ajouté
                if (!spanDansParagraphe.querySelector('br')) {
                    // Créer un élément <br>
                    const sautLigne = document.createElement('br');

                    // Insérer le saut de ligne avant le premier enfant du span
                    spanDansParagraphe.insertBefore(sautLigne, spanDansParagraphe.firstChild);
                }
            } else {
                // Si la largeur est supérieure ou égale à 767px, vérifier et retirer le <br> si présent
                const br = spanDansParagraphe.querySelector('br');
                if (br) {
                    spanDansParagraphe.removeChild(br);
                }
            }
        }
    };

    // Appeler la fonction une fois au chargement de la page pour vérifier initialement la largeur
    ajouterBreakSiNecessaire();

    // Écouter les changements de taille de la fenêtre et rappeler la fonction si nécessaire
    window.addEventListener('resize', ajouterBreakSiNecessaire);
    
    return (
        <main className='main-erreur'>
            <p className='code-erreur'>404</p>
            <p>Oups! La page que <span>vous demandez n'existe pas.</span></p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Erreur;
