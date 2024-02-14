import React from 'react';

function InfoTitle({ title, location }) {
    return (
        <div className='info_title'>
            <h2>{title}</h2>
            <p>{location}</p>
        </div>
    );
}

export default InfoTitle;
