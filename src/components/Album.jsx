import React, { Component } from "react";

// Import Others components
import Header from "./Header";

// Link
import { Link } from "react-router-dom";

// API
import API from "../Api/api";

export default class Album extends Component {
  pathname = "";

  // Constructor
  constructor(props) {
    super(props);
    console.log("From constructor");
    console.log(props.location.pathname);
    this.pathname = props.location.pathname;
  }

  state = {
    album: {}
  };

  beautifyDuration = duration => {
    return parseInt(222 / 60) + "mn" + 222 % 60;
  };

  componentDidMount() {
    console.log("ComponendDidMount");
    API.getEntity(this.props.location.pathname)
      .then(res => this.setState({ album: res.data }))
      .catch(console.error);
  }

  render() {
    console.log("Render");

    if (Object.keys(this.state.album).length !== 0) {
      const {
        title,
        nb_tracks,
        duration,
        release_date,
        fans,
        cover_medium,
        link,
        tracks
      } = this.state.album;

      return (
        <div className="App">
          <Header />
          <div className="album">
            <h1>{title}</h1>
            <img src={cover_medium} alt={title} />
            <p>
              {nb_tracks} titres, {this.beautifyDuration(duration)},{" "}
              {release_date}, {fans} fans
            </p>
            <div className="album-playlist">
              <ul className="gray-box">
                <li className="black">Liste des musiques</li>
                {tracks.data.map(item => (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/track/" + item.id}
                  >
                    <li>
                      <p>{item.title}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <p>Ranking : ...</p>

            <form action={link}>
              <input type="submit" value="Lien de l'album vers Deezer" />
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
