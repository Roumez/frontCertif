import React from 'react';
import './Games.css'

const Games = (props) => {
  return (
    <div className="games">
      {props.children}
    </div>
  );
};

export default Games;