import React from 'react';
import Collapse from '@components/Collapse';

function DescEquip({ title1, title2, description, equipments }) {
    function breakEquipments() {
        return (
            <div className='break' style={{ whiteSpace: 'pre-line' }}>
                {equipments.join('\n')}
            </div>
        );
    }

    return (
        <div className='desc_equip'>
            <Collapse title={title1} description={description} />
            <Collapse title={title2} description={breakEquipments()} />
        </div>
    );
}

export default DescEquip;
