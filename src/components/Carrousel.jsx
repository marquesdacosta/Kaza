import React, { useState } from 'react';
import arrow_left from '../assets/arrow_left.png';
import arrow_right from '../assets/arrow_right.png';
import '@styles/carrousel.scss';



function Carrousel({props}){ // prend en parametre le props defini par le parent

  //currentImage defini la valeur 
  //setCurrentImage permet de mettre a jour la valeur
  //useState (0) est la valeur initiale de currentImage

  const [currentImage, setCurrentImage] = useState(0); // Déclaration d'un état local pour suivre l'index de l'image actuelle dans le carrousel

function nextImage() {
  if (currentImage === props.pictures.length - 1) {
    setCurrentImage(0);
  } else {
    setCurrentImage(currentImage + 1);
  }
}

function prevImage(){
  if (currentImage === 0){
    setCurrentImage(props.pictures.length -1);
  } else {
    setCurrentImage(currentImage -1);
  }
}

  return (
    <div className="fiche_logement">
        <div className='carrousel'>
        <img src={arrow_left} alt="arrow_left" className='arrow_left' onClick={prevImage} />
        <img src={arrow_right} alt="arrow_right" className='arrow_right' onClick={nextImage}/>
          <img src={props.pictures[currentImage]} alt={`Image ${currentImage + 1}`} className='current_img'/>
        </div>
    </div>
  );
};

export default Carrousel;
