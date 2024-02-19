import React from 'react';
import DescEquip from '@components/DescEquip';
import InfoHostTitleRatingTags from '@components/InfoHostTitleRatingTags';

function InfoLogement({ title, location, host, tags, rating, description, equipments }) {
    return (
        <div className='info_logement'>
            <InfoHostTitleRatingTags 
                title={title}
                location={location}
                tags={tags}
                rating={rating}
                name={host.name}
                picture={host.picture}
            />
            <DescEquip
                title1={"Description"}
                title2={"Equipements"}
                description={description}
                equipments={equipments}
            />

        </div>
    );
}

export default InfoLogement;
