import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// Router
import { Router, Route, Link } from "react-router-dom";

// Components
import Album from "./components/Album";
import Artist from "./components/Artist";
import Home from "./components/Home";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/artist" component={Artist} />
      <Route path="/album" component={Album} />
    </div>
    <Home />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
