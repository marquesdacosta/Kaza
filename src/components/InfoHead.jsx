import React from 'react';
import InfoTitle from '@components/InfoTitle';
import InfoHost from '@components/InfoHost';

function InfoHead({ title, location, name, picture }) {
    return (
        <div className='info_head'>
            <InfoTitle title={title} location={location} />
            <InfoHost name={name} picture={picture} />
        </div>
    );
}

export default InfoHead;
