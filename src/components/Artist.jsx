import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Artist extends Component {
  static propTypes = {
    artist: PropTypes.object.isRequired
  };

  render() {
    const { name, picture_medium, nb_album, nb_fan, link } = this.props.artist;
    return (
      <div className="Artist">
        <img src={picture_medium} alt={name} />
        <h2>{name}</h2>
        <p>Nombre d'albums vendus : {nb_album}</p>
        <p>Nombre de fans {nb_fan}</p>
        <button type="submit" class="">
          Voir l'artiste sur Deezer
        </button>
      </div>
    );
  }
}
