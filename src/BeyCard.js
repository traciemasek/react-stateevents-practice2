import React from "react";

const BeyCard = props => {
  console.log("card", props);
  let clickHandler = bey => {
    props.clickHandler(props.bey);
  };

  return (
    <div>
      <h3>{props.bey.name}</h3>
      <img alt="" src={props.bey.img} onClick={clickHandler} />
    </div>
  );
};

export default BeyCard;

const func = () => {};
