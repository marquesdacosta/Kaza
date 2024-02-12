import React, { useState } from 'react';
import Banner from '../components/Banner';
import Content from '../components/Content';
import banner from '../assets/banner.png';

function Accueil() {
    const [selectedLogementId, setSelectedLogementId] = useState(null);

    const handleLogementClick = (logementId) => {
        setSelectedLogementId(logementId);
    };

    return (
        <main>
            <Banner imageUrl={banner} showTitle={true}/>
            <Content onLogementClick={handleLogementClick} />
        </main>
    );
}

export default Accueil;