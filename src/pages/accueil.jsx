import React, { useState } from 'react';
import Banner from '@components/Banner';
import Content from '@components/Content';
import banner from '../assets/banner.png';

function Accueil() {
    const [selectedLogementId, setSelectedLogementId] = useState(null);

    // selectedLogementId = stock l'id du logement cliqué 
    // setselectedLogementId = met a jour la valeur selectedLogementId

    function LogementClick(logementId) { // fonction qui permet de mettre a jour l'ID lorsqu'on clique sur une card (logement)
    setSelectedLogementId(logementId); 
}

    return (
        <main>
            <Banner imageUrl={banner} showTitle={true}/>
            <Content onClick={LogementClick} />
        </main>
    );
}

export default Accueil;