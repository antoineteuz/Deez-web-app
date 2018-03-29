//index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Artist from "./components/Artist";
import Album from "./components/Album";
import Favori from "./components/Favori";
import Solotrack from "./components/Solotrack";
import "./index.css";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/favoris" name="favoris" component={Favori} />
      <Route path="/artist/:id" name="artist" component={Artist} />
      <Route path="/album/:id" name="album" component={Album} />
      <Route path="/track/:id" name="track" component={Solotrack} />
    </div>
  </Router>,
  document.getElementById("root")
);
