import React, {useState} from 'react';
import './ContentCreator.css'
//import {useDispatch} from 'react-redux';

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

//Don’t reload the page when you click on the button
const handleForm = e => {
  e.preventDefault();
}


const handleInputChange = (e) => {
if(e.target.classList.contains('inp-title')){
  const inputValue = {...games, title: e.target.value}
  setGames(inputValue)
  }
  else if (e.target.classList.contains('inp-cover')){
  const inputValue = {...games, cover: e.target.value}
  setGames(inputValue)
  }
  else if (e.target.classList.contains('inp-creator')){
  const inputValue = {...games, creator: e.target.value}
  setGames(inputValue)
  }
  else if (e.target.classList.contains('inp-price')){
  const inputValue = {...games, price: e.target.value}
  setGames(inputValue)
  }
  else if (e.target.classList.contains('inp-description')){
  const inputValue = {...games, description: e.target.value}
  setGames(inputValue)
  }
};
console.log(games)

//Form with 2 way data-banding on-change and value
  return (
    <>
       <h1 className="title-form">Create your video game</h1>

      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Title</label>
        <input 
        value={games.title}
        onChange={handleInputChange} 
        type="text" id="title" 
        placeholder="Game name"
        className="inp-title" />
        
        <label htmlFor="image">Cover page</label>
        <input 
        onChange={handleInputChange} 
        value = {games.cover}
        type="text" 
        placeholder="https://www.google.com/cover-game.jpg"
        className="inp-cover" />

        <label htmlFor="title">Creator game</label>
        <input 
        onChange={handleInputChange} 
        value = {games.creator}
        type="text" id="creator" 
        placeholder="Creator Game"
        className="inp-creator" />
   
         <label htmlFor="title">Price game</label>
        <input 
        onChange={handleInputChange} 
        value = {games.price}
        type="text" id="price" 
        placeholder="Price Game"
        className="inp-price"/>
        
        <label htmlFor="description">Description Game</label>
        <textarea 
        onChange={handleInputChange} 
        value = {games.description}
        id="description game" 
        placeholder="Description game"
        className="inp-description">
        </textarea>

        <button>Create your game</button>
      </form>
    </>
  );
};

export default ContentCreator;