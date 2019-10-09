import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./BeyContainer";
import Favorites from "./Favorites"

class App extends Component {
  state = {
    beys: []
  }

  toggleFavorite = (bey) => {
    let beysCopy = [...this.state.beys]
    let targetBey = beysCopy.find(beyObj => beyObj === bey)
    targetBey.favorite = !targetBey.favorite

    this.setState({[this.state.beys]: beysCopy})
  }

  
  componentDidMount() {
    fetch("http://localhost:4000/beys")
    .then(resp => resp.json())
    .then(data => {
      this.setState({beys: data})
    })
  }
  
  render() {
    //get all BeyObjs that are favorite: true and send to Favorites container
    let faveBeys = this.state.beys.filter(beyObj => beyObj.favorite)

    return (
      <div className="container">
        <BeyContainer beys={this.state.beys} toggleFavorite={this.toggleFavorite}/> 
        <Favorites beys={faveBeys} toggleFavorite={this.toggleFavorite}/>
      </div>
    );
  }

};

export default App;
