import React, { useEffect, useRef } from 'react';
import Carr from './Carrucel.module.css';
import gym1 from '../../assets/gym 1.jpg';
import gym2 from '../../assets/gym 2.jpg';
import gym3 from '../../assets/gym 3.jpg';
import gym4 from '../../assets/gym 4.jpg';

export default function Carrucel() {
  const sliderRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const totalImages = 4; // Número total de imágenes

    const slide = () => {
      indexRef.current = (indexRef.current + 1) % totalImages;
      slider.style.transform = `translateX(${-indexRef.current * 100 / totalImages}%)`;
    };

    const interval = setInterval(slide, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={Carr.slider}>
      <ul ref={sliderRef}>
        <li><img src={gym1} alt='Gym 1' /></li>
        <li><img src={gym2} alt='Gym 2' /></li>
        <li><img src={gym3} alt='Gym 3' /></li>
        <li><img src={gym4} alt='Gym 4' /></li>
      </ul>      
    </div>
  );
}

