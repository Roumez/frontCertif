import React from 'react';
import './ContentCreator.css'

const ContentCreator = () => {
  return (
    <>
       <h1 className="title-form">Create your video game</h1>

      <form className="container-form">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Game name" />

        <label htmlFor="image">Cover page</label>
        <input type="text" className="link" placeholder="https://www.google.com/cover-game.jpg" />

         <label htmlFor="title">Key game</label>
        <input type="text" id="title" placeholder="Key Game" />

        <label htmlFor="description">Description Game</label>
        <textarea id="description game" placeholder="Description game"></textarea>

        <button>Create your game</button>
      </form>
    </>
  );
};

export default ContentCreator;