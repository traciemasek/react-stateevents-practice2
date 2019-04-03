import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./BeyContainer";
import Favorites from "./Favorites";

class App extends Component {
  state = {
    beys: []
  };

  componentDidMount() {
    fetch("http://localhost:4000/beys")
      .then(resp => resp.json())
      .then(beys => this.setState({ beys }));
  }

  clickHandler = bey => {
    let newArr = [...this.state.beys];
    let foundBey = newArr.find(beyObj => beyObj.id === bey.id);
    foundBey.favorite = !foundBey.favorite;
    this.setState({ beys: newArr });
  };

  favoriteBeys = () => {
    return this.state.beys.filter(beyObj => beyObj.favorite);
  };

  render() {
    console.log("App", this.state.beys);
    return (
      <div className="container">
        <BeyContainer beys={this.state.beys} clickHandler={this.clickHandler} />
        <Favorites
          beys={this.favoriteBeys()}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
