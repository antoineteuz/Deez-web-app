// Styles
import logo from "./logo.svg";
import "./App.css";

// API
import API from "./Api/api";

// Components
import React, { Component } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Track from "./components/Track";

// Router
import Router from "./components/Router";

class Home extends Component {
  // State
  state = {
    tracks: { data: [] }
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

  onSubmit = query => {
    API.searchTracks(query)
      .then(res => this.setState({ tracks: res.data }))
      .catch(console.error);
  };
}

export default Home;
