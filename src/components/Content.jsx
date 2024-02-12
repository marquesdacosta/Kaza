import '../styles/content.scss';
import React from 'react';
import Card from './Card';
import logements from '../../datas/logements.json';

function Content(){
    return (
        <section className='content'>
            {logements.map(logement => (
                <Card key={logement.id} logement={logement} />
            ))}
        </section>
    );
}

export default Content;
