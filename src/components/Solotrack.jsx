import React, { Component } from "react";
import PropTypes from "prop-types";

// Link
import { Link } from "react-router-dom";

// Import Others components
import Track from "./Track";
import Header from "./Header";

// API
import API from "../Api/api";

export default class Solotrack extends Component {
  pathname = "";

  // Constructor
  constructor(props) {
    super(props);
    this.pathname = props.location.pathname;
  }

  state = {
    track: {}
  };

  beautifyDuration = duration => {
    return parseInt(222 / 60) + "mn" + 222 % 60;
  };

  componentDidMount() {
    console.log("ComponendDidMount");
    API.getEntity(this.props.location.pathname)
      .then(res => this.setState({ track: res.data }))
      .catch(console.error);
  }

  render() {
    console.log("Render");

    if (Object.keys(this.state.track).length !== 0) {
      console.log("Track loaded");
      console.log(this.state.track);
      //
      /**
        ● Titre du morceau
        ● Photo et titre de l’album
        ● Photo et nom de l’artiste
        ● Durée totale du morceau
        ● Date de parution
        ● Un player audio permettant d’écouter un extrait (preview)
        ● Un lien menant à ce titre sur Deezer
        ● Un bouton pour ajouter/retirer des favoris
    */
      const {
        title,
        duration,
        release_date,
        preview,
        link,
        album,
        artist
      } = this.state.track;

      console.log("TEST");
      console.log("ALBUM " + album.title);

      return (
        <div className="App">
          <Header />
          <div>
            <h1>{title}</h1>

            <div className="Track-Album">
              <img src={album.cover_medium} alt={title} />
              <Link to={"/album/" + album.id}>
                <h2>Album : {album.title}</h2>
              </Link>
            </div>

            <div className="Track-Artist">
              <img src={artist.name} alt={artist.name} />
              <Link to={"/artist/" + artist.id}>
                <h2>Artiste : {artist.name}</h2>
              </Link>
            </div>

            <audio src={preview} autoPlay>
              Votre navigateur ne supporte pas l'élément <code>audio</code>.
            </audio>

            <p>Duration : {this.beautifyDuration(duration)}</p>

            <p>Date de parution : {release_date}</p>

            <form action={link}>
              <input type="submit" value="Lien de ce morceau vers Deezer" />
            </form>

            <div className="Solotrack-actions" />
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
