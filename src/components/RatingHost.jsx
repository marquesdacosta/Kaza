import React from 'react';
import RatingStars from '@components/RatingStars';
import InfoHost from '@components/InfoHost';

function RatingHost ({rating , name, picture }) {
    return (
        <div className='rating_host'>
        <RatingStars rating={rating} />
        <InfoHost name={name} picture={picture} />
        </div>
    )
}

export default RatingHost