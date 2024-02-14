import React from 'react';

function Tags({ tags }) {
    return (
        <div className='tags'>
            {tags.map((tag, index) => (
                <p key={index} className="tag">{tag}</p>
            ))}
        </div>
    );
}

export default Tags;
