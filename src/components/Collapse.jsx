import React, { useState } from 'react';
import arrow from '../assets/arrow.png';
import '@styles/collapse.scss'; 


function Collapse(props) {
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

    return (
            <div key={props.title} className='collapse'>
                <div className='collapse__title'>
                    <h2>{props.title}</h2>
                    <div><img src={arrow} alt="arrow" className={isCollapsed ? 'arrow' : 'arrow_show'} onClick={toggleCollapse}/></div>
                </div>
                <div className={isCollapsed ? 'collapse__text' : 'collapse__text show'}>
                {props.description}
                </div>
            </div>
            );
}

export default Collapse;

