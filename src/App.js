import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./Api/api";
import SearchForm from "./components/SearchForm";
import Track from './components/Track';

class App extends Component {
  // State
  state = {
    tracks: { data: [] },
  };

  render() {
    console.log('STATE value', this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Deez web application </h1>
        </header>

        <SearchForm onSubmit={this.onSubmit} />

        <div>{this.state.tracks.data.map(track => <Track key={track.id} track={track} />)}</div>
      </div>
    );
  }

  onSubmit = query => {
    API.searchTracks(query)
      .then(res => this.setState({ tracks: res.data }))
      .catch(console.error);
  };
}

export default App;
