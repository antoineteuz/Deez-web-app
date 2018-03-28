import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Album extends Component {
  static propTypes = {
    album: PropTypes.object.isRequired
  };

  render() {
    const {
      title,
      cover_medium,
      artist,
      tracks,
      rating,
      link
    } = this.props.album;
    return (
      <div className="Album">
        <img src={cover_medium} alt={title} />
        <h2>{title}</h2>
        <p>Artiste : {artist}</p>

        <p>Ranking : {rating}</p>
        <button type="submit" class="">
          Voir l'album sur Deezer
        </button>
      </div>
    );
  }
}
