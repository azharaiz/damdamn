import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Index extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <h1 className="nama1">Tam Taman</h1>
          <h2 className="nama2">A war between Fire and Tree</h2>
          <div className="buttons">
            <Link to="/setgame">
              <button className="start-button">Start Game</button>
            </Link>

            <Link to="/about">
              <button className="about-button">About</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
