import React from 'react';
import InfoTitleTag from '@components/InfoTitleTags';
import RatingHost from '@components/RatingHost';

function InfoHostTitleRatingTags ({ title, location , tags , rating , name , picture }) {
    return (
        <div className='InfoHostTitleRatingTags'>
            <InfoTitleTag
                title={title}
                location={location}
                tags={tags}
            />
            <RatingHost
                rating={rating}
                name={name}
                picture={picture}
            />
        </div>
    )
}

export default InfoHostTitleRatingTags