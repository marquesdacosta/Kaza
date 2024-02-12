import React, { useState } from 'react';
import arrow_left from '../assets/arrow_left.png';
import arrow_right from '../assets/arrow_right.png';
import '../styles/carrousel.scss';

const Carrousel = ({ logement }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === logement.pictures.length - 1) ? 0 : prevIndex + 1);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0) ? logement.pictures.length - 1 : prevIndex - 1);
  };

  return (
    <div className="fiche_logement">
        <div className='carrousel'>
        <img src={arrow_left} alt="arrow_left" className='arrow_left' onClick={prevImage} />
        <img src={arrow_right} alt="arrow_right" className='arrow_right' onClick={nextImage}/>
          <img src={logement.pictures[currentImage]} alt={`Image ${currentImage + 1}`} className='current_img'/>
        </div>
        <div className='info_logement'>
            
        </div>
    </div>
  );
};

export default Carrousel;
