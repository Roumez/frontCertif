import React from 'react';
import './ContentCreator.css'

const ContentCreator = () => {
  return (
    <>
       <h1 className="title-form">sell your video game</h1>

      <form className="container-form">
        <label htmlFor="title">Titre</label>
        <input type="text" id="title" placeholder="Game name" />

        <label htmlFor="image">Cover page</label>
        <input type="" id="title" placeholder="Game cover" />

        <label htmlFor="description">Description Game</label>
        <textarea id="description game" placeholder="Description game"></textarea>

        <button>Sell your game</button>
      </form>
    </>
  );
};

export default ContentCreator;