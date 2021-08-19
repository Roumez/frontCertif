import React from 'react';
import './Marketplace.css'
import Games from '../../Components/Games/Games'


const Marketplace = () => {
  return (
    <>
      <h1 className='marketplace-title'>Les jeux disponibles</h1>
      <div className="container-games">
        <Games>
         <h2>Hello HardFork</h2>
         <img src="" alt="" />
          </Games>
          <Games>
         <h2>Hello HardFork</h2>
          </Games>
          <Games>
         <h2>Hello HardFork</h2>
          </Games>
      </div>
    </>
  );
};

export default Marketplace;