import React from 'react';
import Tags from '@components/Tags';
import RatingStars from '@components/RatingStars';

function TagsRating({ tags, rating }) {
    return (
        <div className='tags_rating'>
                <Tags tags={tags} />
                <RatingStars rating={rating} />
        </div>
    );
}

export default TagsRating;
