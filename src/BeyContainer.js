import React from "react";
import BeyCard from "./BeyCard";

class BeyContainer extends React.Component {
  render() {
    let arrayOfBey = this.props.beys.map(beyObj => (
      <BeyCard
        key={beyObj.id}
        bey={beyObj}
        clickHandler={this.props.clickHandler}
      />
    ));
    return (
      <div className="index">
        <h1>Index</h1>
        {arrayOfBey}
      </div>
    );
  }
}

export default BeyContainer;
