import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
import Board from "../components/board/index";
import initialiseChessBoard from "../helper/initBoard";
// import "../ai/minmax"

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      ai: false,
      squares: initialiseChessBoard(),
      player: 1,
      sourceSelection: -1,
      status: "Waiting for movement...",
      turn: "Fire",
      playerScore: 0,
      opponentScore: 0,
      winStatus: "",
      winState: false
    };
  }

  handleClick(index) {
    const squares = this.state.squares.slice();
    const xAxis = index[1],
      yAxis = index[0];
    if (!this.state.ai || this.state.player === 1) {
      if (this.state.sourceSelection === -1) {
        this.checkPlayer(yAxis, xAxis);
      } else {
        // xAxis & yAxis === destination click
        // x & y === source click
        console.log("src:", this.state.sourceSelection);
        console.log("dest:", [xAxis, yAxis]);
        const x = this.state.sourceSelection[0],
          y = this.state.sourceSelection[1];
        squares[y][x].style = {
          ...squares[y][x].style,
          backgroundColor: ""
        };

        if (
          squares[yAxis][xAxis] &&
          squares[yAxis][xAxis].player === this.state.player
        ) {
          this.wrongSelection();
        } else {
          console.log(this.possibleMove(x, y));
          this.moveToPossibleMove(x, y, xAxis, yAxis);
        }
        console.log(this.checkWins());
        console.log("=====");
      }
    }
  }

  moveToPossibleMove(srcX, srcY, destX, destY) {
    const squares = this.state.squares.slice();
    const possiblemove = this.possibleMove(srcX, srcY);
    let playerID = squares[srcY][srcX].player;
    let flag = false;
    for (let index = 0; index < possiblemove.length; index++) {
      const temp = possiblemove[index];
      if (temp[0] === destX && temp[1] === destY) {
        const jump = this.checkJump(destX - srcX, srcY - destY);
        squares[destY][destX] = squares[srcY][srcX];
        squares[srcY][srcX] = null;
        if (jump) {
          squares[srcY + jump[1]][srcX + jump[0]] = null;
          this.addPoint(playerID);
        }
        playerID = playerID === 1 ? 2 : 1;
        flag = true;
      }
    }
    if (!flag) {
      this.wrongSelection();
    } else {
      this.waitingState();
    }
    const turn = playerID === 1 ? "Fire" : "Tree";
    this.setState({
      squares: squares,
      player: playerID,
      sourceSelection: -1,
      turn: turn
    });
  }

  possibleMove(x, y) {
    const squares = this.state.squares;
    const currentPlayer = squares[y][x];
    const currentPlayerID = currentPlayer.player;
    let listPossibleMove = [];
    if (currentPlayer === null) {
      return false;
    }

    if (
      x - 1 >= 0 &&
      squares[y][x - 1] &&
      squares[y][x - 1].player !== currentPlayerID
    ) {
      if (x - 2 >= 0 && squares[y][x - 2] === null) {
        listPossibleMove.push([x - 2, y]);
      }
    } else if (x - 1 >= 0 && squares[y][x - 1] === null) {
      listPossibleMove.push([x - 1, y]);
    }

    if (
      x + 1 <= 4 &&
      squares[y][x + 1] &&
      squares[y][x + 1].player !== currentPlayerID
    ) {
      if (x + 2 <= 4 && squares[y][x + 2] === null) {
        listPossibleMove.push([x + 2, y]);
      }
    } else if (x + 1 <= 4 && squares[y][x + 1] === null) {
      listPossibleMove.push([x + 1, y]);
    }

    if (
      y - 1 >= 0 &&
      squares[y - 1][x] &&
      squares[y - 1][x].player !== currentPlayerID
    ) {
      if (y - 2 >= 0 && squares[y - 2][x] === null) {
        listPossibleMove.push([x, y - 2]);
      }
    } else if (y - 1 >= 0 && squares[y - 1][x] === null) {
      listPossibleMove.push([x, y - 1]);
    }

    if (
      y + 1 <= 10 &&
      squares[y + 1][x] &&
      squares[y + 1][x].player !== currentPlayerID
    ) {
      if (y + 2 <= 10 && squares[y + 2][x] === null) {
        listPossibleMove.push([x, y + 2]);
      }
    } else if (y + 1 <= 10 && squares[y + 1][x] === null) {
      listPossibleMove.push([x, y + 1]);
    }

    if (
      y - 1 >= 0 &&
      x - 1 >= 0 &&
      squares[y - 1][x - 1] &&
      squares[y - 1][x - 1].player !== currentPlayerID
    ) {
      if (y - 2 >= 0 && x - 2 >= 0 && squares[y - 2][x - 2] === null) {
        listPossibleMove.push([x - 2, y - 2]);
      }
    } else if (y - 1 >= 0 && x - 1 >= 0 && squares[y - 1][x - 1] === null) {
      listPossibleMove.push([x - 1, y - 1]);
    }

    if (
      y - 1 >= 0 &&
      x + 1 <= 4 &&
      squares[y - 1][x + 1] &&
      squares[y - 1][x + 1].player !== currentPlayerID
    ) {
      if (y - 2 >= 0 && x + 2 <= 4 && squares[y - 2][x + 2] === null) {
        listPossibleMove.push([x + 2, y - 2]);
      }
    } else if (y - 1 >= 0 && x + 1 <= 4 && squares[y - 1][x + 1] === null) {
      listPossibleMove.push([x + 1, y - 1]);
    }

    if (
      y + 1 <= 10 &&
      x - 1 >= 0 &&
      squares[y + 1][x - 1] &&
      squares[y + 1][x - 1].player !== currentPlayerID
    ) {
      if (y + 2 <= 10 && x - 2 >= 0 && squares[y + 2][x - 2] === null) {
        listPossibleMove.push([x - 2, y + 2]);
      }
    } else if (y + 1 <= 10 && x - 1 >= 0 && squares[y + 1][x - 1] === null) {
      listPossibleMove.push([x - 1, y + 1]);
    }

    if (
      y + 1 <= 10 &&
      x + 1 <= 4 &&
      squares[y + 1][x + 1] &&
      squares[y + 1][x + 1].player !== currentPlayerID
    ) {
      if (y + 1 <= 10 && x + 1 <= 4 && squares[y + 2][x + 2] === null) {
        listPossibleMove.push([x + 2, y + 2]);
      }
    } else if (y + 1 <= 10 && x + 1 <= 4 && squares[y + 1][x + 1] === null) {
      listPossibleMove.push([x + 1, y + 1]);
    }

    return listPossibleMove;
  }

  listCurrentPlayer(playerID) {
    let squares = this.state.squares.slice();
    let listPlayer = [];
    for (let y = 0; y < squares.length; y++) {
      for (let x = 0; x < squares[y].length; x++) {
        const current = squares[y][x];
        if (current && current.player === playerID) {
          listPlayer.push([x, y]);
        }
      }
    }
    return listPlayer;
  }

  addPoint(playerID) {
    let playerScore = this.state.playerScore,
      opponentScore = this.state.opponentScore;
    if (playerID === 2) {
      opponentScore++;
    } else {
      playerScore++;
    }
    this.setState({
      playerScore: playerScore,
      opponentScore: opponentScore
    });
  }

  checkWins() {
    if (this.state.playerScore === 14) {
      this.setState({ winStatus: "Player 1 Win", winState: true });
      return true;
    } else if (this.state.opponentScore === 14) {
      this.setState({ winStatus: "Player 2 Win", winState: true });
      return true;
    }
    let counter = 0;
    const temp = this.state.squares;
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x <= 4; x++) {
        if (temp[y][x] && temp[y][x].player === 1) {
          counter++;
        }
      }
    }
    if (counter >= 3) {
      this.setState({ winStatus: "Player 1 Win", winState: true });
      return true;
    }
    counter = 0;
    for (let y = 8; y < 11; y++) {
      for (let x = 0; x <= 4; x++) {
        if (temp[y][x] && temp[y][x].player === 2) {
          counter++;
        }
      }
    }
    if (counter >= 3) {
      this.setState({ winStatus: "Player 2 Win", winState: true });
      return true;
    }
    return false;
  }

  checkJump(x, y) {
    if (x === 0 && y === 2) {
      return [0, -1];
    } else if (x === 0 && y === -2) {
      return [0, 1];
    } else if (x === 2 && y === 0) {
      return [1, 0];
    } else if (x === -2 && y === 0) {
      return [-1, 0];
    } else if (x === 2 && y === 2) {
      return [1, -1];
    } else if (x === -2 && y === 2) {
      return [-1, -1];
    } else if (x === 2 && y === -2) {
      return [1, 1];
    } else if (x === -2 && y === -2) {
      return [-1, 1];
    }
    return false;
  }

  checkPlayer(yAxis, xAxis) {
    const squares = this.state.squares.slice();
    if (
      !squares[yAxis][xAxis] ||
      squares[yAxis][xAxis].player !== this.state.player
    ) {
      this.setState({
        status:
          "Wrong selection. Choose player " + this.state.player + " pieces."
      });
      if (squares[yAxis][xAxis]) {
        squares[yAxis][xAxis].style = {
          ...squares[yAxis][xAxis].style,
          backgroundColor: ""
        };
      }
    } else {
      squares[yAxis][xAxis].style = {
        ...squares[yAxis][xAxis].style,
        backgroundColor: "RGB(220,220,220)"
      };
      this.setState({
        status: "Choose destination for the selected piece",
        sourceSelection: [xAxis, yAxis]
      });
    }
  }

  wrongSelection() {
    this.setState({
      status: "Wrong selection. Choose valid source and destination again.",
      sourceSelection: -1
    });
  }

  waitingState() {
    this.setState({
      status: "Waiting for movement...."
    });
  }

  render() {
    // console.log("Opponent state: " + this.props.opponentState.opponent);
    return (
      <div className="container">
        <Link to="/">
          <button className="back-button">Back</button>
        </Link>
        <h1>Your opponent: Player</h1>
        <div className="game-container">
          <div className="game-info-container">
            <div className="game-info-upper">
              <h3>Turn:</h3>
              <div
              // id="player-turn-box"
              // style={{ backgroundColor: this.state.turn }}
              >
                <p>{this.state.turn}</p>
              </div>
              <div className="game-status">{this.state.status}</div>
            </div>
            <div className="game-info-lower">
              <h3>Scores:</h3>
              <div className="score">
                <p>Fire: {this.state.playerScore}</p>
                <p>Tree: {this.state.opponentScore}</p>
              </div>
            </div>
            <div className="game-win-state">{this.state.winState}</div>
          </div>
          <div className="game-board">
            <Board
              squares={this.state.squares}
              onClick={index => this.handleClick(index)}
            />
          </div>
        </div>
      </div>
    );
  }
}
