import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Track extends Component {
  static propTypes = {
    track: PropTypes.object.isRequired,
    artist: PropTypes.object.isRequired,
    album: PropTypes.object.isRequired
  };

  printMinute(duration) {
    return 222 / 60 + "mn" + 222 % 60 + " s.";
  }

  render() {
    const { title, duration, picture, artist, album } = this.props.track;
    return (
      <div className="Track">
        <div className="image">
          <img className="Track-img" src={album.cover_big} alt={title} />
        </div>
        <div className="informations">
          <h2 className="title">{title}</h2>
          <p className="subtitle">Artist : {artist.name}</p>
          <p className="subtitle">Album : {album.title}</p>
          <p className="subtitle">Duration : {duration} secondes</p>
        </div>
        <div className="actions">
          <button type="submit" class="" onClick="">
            Écouter un extrait
          </button>

          <button type="submit" class="" onClick="">
            Consulter l'album
          </button>

          <button type="submit" class="">
            Consulter l'artiste
          </button>

          <button type="submit" class="">
            Mettre en favori
          </button>
        </div>
      </div>
    );
  }
}
