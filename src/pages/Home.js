import React from 'react';

import './styles/Home.css';
import astronauts from '../images/astronauts.svg';
import conf from '../images/platzi-conf.svg';

function Home() {
  return (
    <div className='home-container'>
      <div className='home-container__bgi'>
        <img src={conf} alt="Logo Platzi Conf"/>
        <img src={astronauts} alt="Imágen de astronautas"/>
      </div>
    </div>
  );
}

export default Home;
