import '@styles/content.scss';
import React from 'react';
import Card from '@components/Card';
import logements from '@datas/logements.json';

function Content(){
    return (
        <section className='content'>
            {logements.map(logement => (
                <Card key={logement.id} title={logement.title} imageUrl={logement.cover} link={`/logement/${logement.id}`} />
            ))}
        </section>
    );
}

export default Content;
