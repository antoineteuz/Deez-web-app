import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Track extends Component {
  static propTypes = {
    track: PropTypes.object.isRequired,
    artist: PropTypes.object.isRequired,
    album: PropTypes.object.isRequired
  };

  /** Class Method */
  beautifyDuration = duration => {
    return parseInt(222 / 60) + "mn" + 222 % 60;
  };

  onClickPreview = preview => {
    console.log("Preview :" + preview);
  };

  onClickFavori = () => {
    console.log("onClickFavori Event");
  };

  render() {
    const {
      title,
      duration,
      picture,
      artist,
      album,
      preview
    } = this.props.track;
    return (
      <div className="Track">
        <div className="image">
          <img className="Track-img" src={album.cover_big} alt={title} />
        </div>
        <div className="informations">
          <h2 className="title">{title}</h2>
          <p className="subtitle">Artist : {artist.name}</p>
          <p className="subtitle">Album : {album.title}</p>
          <p className="subtitle">
            Duration : {this.beautifyDuration(duration)}
          </p>
        </div>
        <div className="actions">
          <Link to={"/album/" + album.id}>
            <input
              className="button_primary"
              type="button"
              value="Consulter l'album"
            />
          </Link>
          <Link to={"/artist/" + artist.id}>
            <input
              className="button_primary"
              type="button"
              value="Consulter l'artiste"
            />
          </Link>
          <input
            className="button_primary"
            type="button"
            value="Écouter un extrait"
            onClick={() => this.onClickPreview(preview)}
          />
          <input
            className="button_primary"
            type="button"
            value="Mettre en favoris"
            onClick={this.onClickFavori}
          />
        </div>
      </div>
    );
  }
}
