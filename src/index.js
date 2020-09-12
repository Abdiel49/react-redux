import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import About from "./components/About";
import Home from "./pages/HomeController";
import NotFound from "./components/NotFound";

const Root = (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/Home" component={Home} exact={true} />
      <Route path="/about" component={About} exact={true} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);


ReactDOM.render(
  <Root/>,
  document.getElementById("root")
);
