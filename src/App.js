import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages";
import AboutPage from "./pages/about";
import GamePage from "./pages/game";
import NotFound from "./pages/404";

function App() {
  return (
    <Router className="App">
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/game">
                <GamePage />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
