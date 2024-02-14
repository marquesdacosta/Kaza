import React from 'react';
import InfoHead from '@components/InfoHead';
import TagsRating from '@components/TagsRating';
import DescEquip from '@components/DescEquip';

function InfoLogement({ title, location, host, tags, rating, description, equipments }) {
    return (
        <div className='info_logement'>
            <InfoHead
                title={title}
                location={location}
                name={host.name}
                picture={host.picture}
            />
            <TagsRating tags={tags} rating={rating} />
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
