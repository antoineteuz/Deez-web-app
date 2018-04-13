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
  // Constructor

  constructor(props) {
    super(props);

    // State value
    console.log("Constructor params id : ", this.props.match.params.id);

    this.state = {
      tracks: { data: [] },
      query: this.props.match.params.id
    };

    if (this.state.query !== undefined) {
      // Launch method onSubmit
      this.onSubmit(this.state.query);
    }
  }

  // State
  state = {
    tracks: { data: [] },
    query: ""
  };

  onSubmit = query => {
    // Change URL

    console.log("(On Submit) : props", this.props);

    console.log("Trying to add query in url", query);

    this.props.history.push("/search/" + query);

    API.searchTracks(query)
      .then(res => this.setState({ tracks: res.data }))
      .catch(console.error);
  };

  render() {
    console.log("(RENDER) : STATE value", this.state);

    if (Object.keys(this.state.tracks).length !== 0) {
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
    } else {
      return (
        <div className="App">
          <Header />

          <SearchForm onSubmit={this.onSubmit} />
        </div>
      );
    }
  }
}

export default Home;
