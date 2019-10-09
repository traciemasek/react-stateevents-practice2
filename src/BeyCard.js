import React from "react";

const BeyCard = (props) => {

  const toggleClick = () => {
    props.toggleFavorite(props.bey)
  }

  return (
    <div>
      <h3>{props.bey.name}</h3>
      <img alt="" src={props.bey.img} onClick={props.toggleFavorite ? toggleClick : null} />
    </div>
  );
};

export default BeyCard;
