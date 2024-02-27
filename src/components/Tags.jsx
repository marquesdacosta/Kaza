import React from 'react';
import Tag from '@components/Tag';

function Tags({ tags }) {
    return (
        <div className='tags'>
            {tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
            ))}
        </div>
    );
}

export default Tags;
