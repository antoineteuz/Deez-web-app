import React, { Component } from "react";

// Styles
import logo from "../logo.svg";
import "../App.css";

// Link
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-btn-container">
          <Link to="/">
            <span className="nav-btn">Home</span>
          </Link>
          <Link to="/favoris">
            <span className="nav-btn">Favoris</span>
          </Link>
        </div>
      </div>
    );
  }
}
