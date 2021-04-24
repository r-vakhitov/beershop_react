import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Nav from "../Nav";
import Catalog from "../Catalog";
import Home from "../Home";
import About from "../About";
import {MAIN_URL, CATALOG_URL, ABOUT_URL} from '../../router/paths';

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route path={MAIN_URL} exact component={Home} />
          <Route path={CATALOG_URL} component={Catalog} />
          <Route path={ABOUT_URL} component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
