// Styles
import "../App.css";

// API
import API from "../Api/api";

// Components
import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Track from "./Track";
import Header from "./Header";

class Home extends Component {
  // State
  state = {
    tracks: { data: [] }
  };

  onSubmit = query => {
    API.searchTracks(query)
      .then(res => this.setState({ tracks: res.data }))
      .catch(console.error);
  };

  render() {
    console.log("STATE value", this.state);
    return (
      <div className="App">
        <Header />

        <SearchForm onSubmit={this.onSubmit} />

        <div>
          {this.state.tracks.data.map(track => (
            <Track key={track.id} track={track} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
