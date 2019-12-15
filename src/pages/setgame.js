import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

class SetGame extends React.Component {
  constructor() {
    super();
    this.state = {
      opponent: "None",
      purple: "rgb(79, 45, 143)",
      AIButton_color: "white",
      PlayerButton_color: "white",
      easyButton_color: "white",
      hardButton_color: "white",
      easyFont_color: "green",
      hardFont_color: "red",
      AIFont_color: "rgb(79, 45, 143)",
      playerFont_color: "rgb(79, 45, 143)",
      playLink: "None"
    };
  }

  chooseAI = () => {
    this.setState({
      opponent: "AI",
      AIButton_color: "rgb(79, 45, 143)",
      PlayerButton_color: "white",
      AIFont_color: "white",
      playerFont_color: "rgb(79, 45, 143)",
      playLink: "/aigame"
    });
    this.props.opponentProps.opponent = "AI";
  };

  choosePlayer = () => {
    this.setState({
      opponent: "player",
      PlayerButton_color: "rgb(79, 45, 143)",
      AIButton_color: "white",
      playerFont_color: "white",
      AIFont_color: "rgb(79, 45, 143)",
      playLink: "/game"
    });
    this.props.opponentProps.opponent = "Player";
  };

  setEasy = () => {
    this.setState({
      easyButton_color: "green",
      easyFont_color: "white",
      hardButton_color: "white",
      hardFont_color: "red"
    });
    this.props.opponentProps.difficulty = 2;
    console.log("Difficulty (depth): " + this.props.opponentProps.difficulty);
  };

  setHard = () => {
    this.setState({
      hardButton_color: "red",
      hardFont_color: "white",
      easyButton_color: "white",
      easyFont_color: "green"
    });
    this.props.opponentProps.difficulty = 1;
    console.log("Difficulty (depth): " + this.props.opponentProps.difficulty);
  };

  render() {
    console.log("Opponent props:" + this.props.opponentProps.opponent);
    console.log("Link play: " + this.state.playLink);
    console.log("Difficulty (depth): " + this.props.opponentProps.difficulty);
    return (
      <div className="app">
        <Link to="/">
          <button className="back-button">Back</button>
        </Link>
        <div className="playerSelection-section">
          <h1>Choose Opponent</h1>
          <div className="buttons-section">
            <div className="border-hover" onClick={this.choosePlayer}>
              <button
                style={{
                  backgroundColor: this.state.PlayerButton_color,
                  color: this.state.playerFont_color
                }}
              >
                Player
              </button>
            </div>

            <div className="border-hover" onClick={this.chooseAI}>
              <button
                style={{
                  backgroundColor: this.state.AIButton_color,
                  color: this.state.AIFont_color
                }}
              >
                AI
              </button>
            </div>
          </div>

          <div className="buttons-section">
            <div onClick={this.setEasy} className="border-hover">
              <button
                style={{
                  backgroundColor: this.state.easyButton_color,
                  color: this.state.easyFont_color
                }}
              >
                EASY
              </button>
            </div>

            <div onClick={this.setHard} className="border-hover">
              <button
                style={{
                  backgroundColor: this.state.hardButton_color,
                  color: this.state.hardFont_color
                }}
              >
                HARD
              </button>
            </div>
          </div>

          <Link to={this.state.playLink}>
            <button className="play-button">PLAY!</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default SetGame;
