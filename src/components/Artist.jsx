import React, { Component } from "react";
import PropTypes from "prop-types";

// Import Others components
import Track from "./Track";
import Header from "./Header";

// API
import API from "../Api/api";

export default class Artist extends Component {
  pathname = "";

  // Constructor
  constructor(props) {
    super(props);
    console.log("From constructor");
    console.log(props.location.pathname);
    this.pathname = props.location.pathname;
  }

  state = {
    artist: {}
  };

  componentDidMount() {
    console.log("ComponendDidMount");
    API.getEntity(this.props.location.pathname)
      .then(res => this.setState({ artist: res.data }))
      .catch(console.error);
  }

  render() {
    console.log("Render");

    if (Object.keys(this.state.artist).length !== 0) {
      console.log("Artist loaded");
      console.log(this.state.artist);
      //
      const {
        name,
        picture_medium,
        nb_album,
        nb_fan,
        link
      } = this.state.artist;
      return (
        <div className="App">
          <Header />
          <div>
            <h1>{name}</h1>
            <img src={picture_medium} alt={name} />
            <div className="Album-playlist" />
            <p>Nombre d'albums : {nb_album}</p>
            <p>Nombre de fans : {nb_fan}</p>

            <form action={link}>
              <input type="submit" value="Lien de l'artiste vers Deezer" />
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <h1>NOT LOADING</h1>
        </div>
      );
    }
  }
}
