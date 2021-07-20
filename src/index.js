import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";

import About from "./components/About";
import Home from "./pages/HomeController";
import NotFound from "./components/NotFound";
import Results from './components/Results'

import { Provider } from 'react-redux'
import store from './Redux/store'

const Root = (
  <Provider store = {store}>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/Home" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/results" component={Results} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);


ReactDOM.render(
  Root,
  document.getElementById("root")
);
