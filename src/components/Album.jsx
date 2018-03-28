import React, { Component } from "react";
import PropTypes from "prop-types";

// Import Others components
import Track from "./Track";
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

  componentDidMount() {
    console.log("ComponendDidMount");
    API.getEntity(this.props.location.pathname)
      .then(res => this.setState({ album: res.data }))
      .catch(console.error);
  }

  render() {
    console.log("Render");

    if (Object.keys(this.state.album).length !== 0) {
      const { title, cover_medium, link, tracks } = this.state.album;

      return (
        <div className="App">
          <Header />
          <div>
            <h1>{title}</h1>
            <img src={cover_medium} alt={title} />
            <div className="Album-playlist">
              <ul>
                {tracks.data.map(item => (
                  <Link to={"/track/" + item.id}>
                    <li>{item.title}</li>
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
