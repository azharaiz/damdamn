import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages";
import AboutPage from "./pages/about";
import GamePage from "./pages/game";
import NotFound from "./pages/404";
import SetGame from "./pages/setgame";
import GameAI from "./pages/gameAI";

function App() {
  var opponentVar = {
    opponent: "test",
    difficulty: 1
  };
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
          <GamePage opponentProps={opponentVar} />
        </Route>
        <Route path="/aigame">
          <GameAI opponentProps={opponentVar} />
        </Route>
        <Route path="/setgame">
          <SetGame opponentProps={opponentVar} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
