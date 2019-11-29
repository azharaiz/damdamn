import React from "react";

import "../index.css";
import Board from "../components/board/index";
import initialiseChessBoard from "../helper/initBoard";
// import "../ai/minmax"

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: initialiseChessBoard(),
      player: 1,
      sourceSelection: -1,
      status: "",
      turn: "white",
      score1: 0,
      score2: 0
    };
  }

  handleClick(index) {
    const squares = this.state.squares.slice();
    const xAxis = index[1],
      yAxis = index[0];

    if (this.state.sourceSelection === -1) {
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
        this.setState({
          status: "Wrong selection. Choose valid source and destination again.",
          sourceSelection: -1
        });
      } else {
        const squares = this.state.squares.slice();
        const isDestOccupied = squares[yAxis][xAxis] ? true : false;
        const diffX = xAxis - x,
          diffY = y - yAxis;
        let isMoveLegal = true;
        console.log("diff:", [diffX, diffY]);
        if (
          diffX > 2 ||
          diffY > 2 ||
          diffX < -2 ||
          diffY < -2 ||
          (diffX === 0 && diffY === 0)
        ) {
          isMoveLegal = false;
        }
        let enemy = false;
        let isEnemyBeforeOccupied = false;
        if (this.checkMovement(diffX, diffY)) {
          enemy = this.checkMovement(diffX, diffY);
          isEnemyBeforeOccupied = squares[enemy[1] + y][enemy[0] + x]
            ? true
            : false;
        }

        const isMovePossible = squares[y][x].isMovePossible(
          [x, y],
          [xAxis, yAxis],
          isDestOccupied,
          isEnemyBeforeOccupied
        );
        // const isMovePossible,isMoveLegal;
        if (isMoveLegal && isMovePossible) {
          squares[yAxis][xAxis] = squares[y][x];
          squares[y][x] = null;
          if (enemy) {
            console.log("return:", [enemy[0], enemy[1]]);
            console.log("eat:", [enemy[0] + x, enemy[1] + y]);
            squares[enemy[1] + y][enemy[0] + x] = null;
          }
          let player = this.state.player === 1 ? 2 : 1;
          let turn = this.state.turn === "white" ? "black" : "white";
          this.setState({
            sourceSelection: -1,
            squares: squares,
            player: player,
            status: "",
            turn: turn
          });
        } else {
          this.setState({
            status:
              "Wrong selection. Choose valid source and destination again.",
            sourceSelection: -1
          });
        }
      }
      console.log("=====");
    }
  }

  checkMovement(x, y) {
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

  render() {
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board
              squares={this.state.squares}
              onClick={index => this.handleClick(index)}
            />
          </div>
          <div className="game-info">
            <h3>Turn</h3>
            <div
              id="player-turn-box"
              style={{ backgroundColor: this.state.turn }}
            ></div>
            <div className="game-status">{this.state.status}</div>
          </div>
        </div>
      </div>
    );
  }
}
