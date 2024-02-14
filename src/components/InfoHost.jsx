import React from 'react';

function InfoHost({ name, picture }) {
    return (
        <div className='info_host'>
            <p>{name}</p>
            <img src={picture} alt="photo-host" />
        </div>
    );
}

export default InfoHost;
