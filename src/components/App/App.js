import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Nav from "../Nav";
import Catalog from "../Catalog";
import Home from "../Home";
import About from "../About";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
