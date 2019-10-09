// import React, { Component } from "react";
import React from "react";
import BeyCard from "./BeyCard"

//this might be able to be a functional component 
const Favorites = (props) => {
  // let beysArr = props.beys.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} />)

  let beysArr = props.beys.map(beyObj => {
    if (!beyObj.favorite) {
      return <BeyCard key={beyObj.id} bey={beyObj} />
    } else {
      return <BeyCard key={beyObj.id} bey={beyObj} toggleFavorite={props.toggleFavorite}/>
    }
  })
  

  return (
    
    <div className="favorites">
      <h1>Favorites</h1>
      {beysArr}
    </div>
  );
  
}

export default Favorites
