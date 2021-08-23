import React from 'react';
import './Marketplace.css'
import Games from '../../Components/Games/Games'
import farCry from './farCry.jpeg'
import fifa from './fifa.jpeg'
import FF from './FF.jpeg'

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
         <h2 className='title-game'>FIFA 2022</h2>
         <img src={fifa} alt="fifa2022" />
         <button>ACHETER</button>
          </Games>
          <Games>
         <h2 className='title-game'>RAINBOW SIX</h2>
         <img src={FF} alt="Final Fantasy" />
         <button>ACHETER</button>
          </Games>
      </div>
    </>
  );
};

export default Marketplace;