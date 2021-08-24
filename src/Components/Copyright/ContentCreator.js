import React, {useState} from 'react';
import './ContentCreator.css'
import {useDispatch} from 'react-redux';

const ContentCreator = () => {

  // 
const [games, setGames] = useState({
title:"",
cover:"",
creator:"",
price:"",
description:""
});

// const dispatch = useDispatch();

const handleInputChange = (e) => {
const newGames = {...games, title: e.target.value};
setGames(newGames);
}

//Form with 2 way data-banding on-change and value
  return (
    <>
       <h1 className="title-form">Create your video game</h1>

      <form className="container-form">
        <label htmlFor="title">Title</label>
        <input 
        onChange={handleInputChange} 
        value={games.title}
        type="text" id="title" 
        placeholder="Game name" />
        
        <label htmlFor="image">Cover page</label>
        <input 
        onChange={handleInputChange} 
        value = {games.cover}
        type="text" 
        className="link" 
        placeholder="https://www.google.com/cover-game.jpg" />

        <label htmlFor="title">Price game</label>
        <input 
        onChange={handleInputChange} 
        value = {games.creator}
        type="text" id="creator" 
        placeholder="Price Game" />
   
         <label htmlFor="title">Price game</label>
        <input 
        onChange={handleInputChange} 
        value = {games.price}
        type="text" id="price" 
        placeholder="Price Game" />
        
        <label htmlFor="description">Description Game</label>
        <textarea 
        onChange={handleInputChange} 
        value = {games.description}
        id="description game" 
        placeholder="Description game">
        </textarea>

        <button>Create your game</button>
      </form>
    </>
  );
};

export default ContentCreator;