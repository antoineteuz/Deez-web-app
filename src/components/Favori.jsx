// Styles
import "../App.css";

// API
import API from "../Api/api";

// Components
import React, { Component } from "react";
import Track from "./Track";
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
