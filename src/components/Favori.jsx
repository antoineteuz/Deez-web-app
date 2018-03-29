// Styles
import "../App.css";

// Components
import React, { Component } from "react";
import Header from "./Header";

class Favori extends Component {
  // State
  state = {
    tracks: { data: [] }
  };

  render() {
    console.log("STATE value", this.state);
    return (
      <div className="App">
        <Header />

        <h1>Favoris</h1>
      </div>
    );
  }
}

export default Favori;
