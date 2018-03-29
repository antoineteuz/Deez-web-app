import React, { Component } from "react";

// Styles
import logo from "../logo.svg";
import "../App.css";

// NavBar
import NavBar from "./NavBar";

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title"> Deez web application </h1>

        <NavBar />
      </header>
    );
  }
}
