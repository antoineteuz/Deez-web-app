import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Album from "./Album";
import Artist from "./Artist";
import Home from "../Home";

const home_route = () => {
  <div>
    <h2>Home</h2>
  </div>;
};

const favoris_route = () => (
  <div>
    <h2>Favoris</h2>
  </div>
);

const album_route = ({ match }) => (
  <div>
    <h3>{match.params.id}</h3>
  </div>
);

const artist_route = ({ match }) => (
  <div>
    <h3>{match.params.id}</h3>
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favoris">Favoris</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact={true} path="/" component={Home} />
      <Route path="/album/" component={Album} />
      <Route path="/artist/" component={Artist} />
    </div>
  </Router>
);

export default BasicExample;
