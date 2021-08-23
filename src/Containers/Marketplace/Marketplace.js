import React from 'react';
import './Marketplace.css'
import Games from '../../Components/Games/Games'
import farCry from './farCry.jpeg'

const Marketplace = () => {
  return (
    <>
      <h1 className='marketplace-title'>Games available</h1>
      <div className="container-games">
        <Games>
         <h2 className='title-game'>FAR CRY 6</h2>
         <img src={farCry} alt="farcry6" />
         <button>ACHETER</button>
          </Games>
          <Games>
         <h2 className='title-game'>Hello HardFork</h2>
         <img src={farCry} alt="farcry6" />
         <button>ACHETER</button>
          </Games>
          <Games>
         <h2 className='title-game'>Hello HardFork</h2>
         <img src={farCry} alt="farcry6" />
         <button>ACHETER</button>
          </Games>
      </div>
    </>
  );
};

export default Marketplace;