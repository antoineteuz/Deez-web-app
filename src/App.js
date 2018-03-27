import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./api.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Deez web application </h1>
        </header>
        <SearchForm />
      </div>
    );
  }
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // Calling Deezer API
    searchTracks(this.state.value);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function searchTracks(value) {
  if (value) {
    API.get("search?q=" + value, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS"
      }
    })
      .then(res => {
        console.log(res.data);
        const tracks = res.data;
        this.setState({ tracks });

        // TODO : Need to build content inside HTML
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    alert("You need to submitt a value");
  }
}

/**
 * Generic Method to make a GET on Deezer API
 * Method to call on actions (Album, Artist, Track)
 *
 * @param {route} path
 * @param {value of the request} value
 */
function GetEntity(path, value) {
  API.get(path + value, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS"
    }
  })
    .then(res => {
      console.log(res.name);
    })
    .catch(error => {
      console.log(error);
    });
}

export default App;
