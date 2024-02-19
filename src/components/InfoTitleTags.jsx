import React from 'react';
import Tags from '@components/Tags';
import InfoTitle from '@components/InfoTitle';

function InfoTitleTag({ title, location, tags}) {
    return (
        <div className='InfoTitleTag'>
            <InfoTitle title={title} location={location} />
            <Tags tags={tags} />
        </div>
    )
}

export default InfoTitleTag