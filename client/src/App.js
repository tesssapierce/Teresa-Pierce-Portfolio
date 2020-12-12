import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Splash from "./pages/Splash";
import NoMatch from "./pages/NoMatch";
import Navigation from "./components/Nav";
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <div className="page">
        <Navigation />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Splash />
          </Route>
          <Route exact path="/aboutme">
            <AboutMe />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
