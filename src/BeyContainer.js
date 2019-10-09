import React from "react";
import BeyCard from "./BeyCard"

const BeyContainer = (props) => {
  
  //Gabbie's multiline ternary
  // let beysArr = props.beys.map(beyObj => {
  //   return beyObj.favorite 
  //   ? <BeyCard key={beyObj.id} bey={beyObj} /> 
  //   : <BeyCard key={beyObj.id} bey={beyObj} toggleFavorite={props.toggleFavorite}/> 
  // })

  
  let beysArr = props.beys.map(beyObj => {
    if (beyObj.favorite) {
      return <BeyCard key={beyObj.id} bey={beyObj} />
    } else {
      return <BeyCard key={beyObj.id} bey={beyObj} toggleFavorite={props.toggleFavorite}/>
    }
  })

  return (
    <div className="index">
      <h1>Index</h1>
      {beysArr}
    </div>
  );
  


}

export default BeyContainer;
