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
      turn: "red",
      score1: 0,
      score2: 0
    };
  }

  handleClick(index) {
    const squares = this.state.squares.slice();
    const xAxis = index[1],
      yAxis = index[0];
    console.log(index);

    if (this.state.sourceSelection === -1) {
      if (!squares[yAxis][xAxis] || squares[yAxis][xAxis].player !== this.state.player) {
        this.setState({
          status:
            "Wrong selection. Choose player " + this.state.player + " pieces."
        });
        if (squares[yAxis][xAxis]) {
          squares[yAxis][xAxis].style = { ...squares[yAxis][xAxis].style, backgroundColor: "" };
        }
      } else {
        squares[yAxis][xAxis].style = {
          ...squares[yAxis][xAxis].style,
          backgroundColor: "RGB(220,220,220)"
        };
        this.setState({
          status: "Choose destination for the selected piece",
          sourceSelection: [xAxis,yAxis]
        });
      }
    } else {
      console.log(this.state.sourceSelection)
      const x = this.state.sourceSelection[0], y = this.state.sourceSelection[1]; 
      squares[y][x].style = {
        ...squares[y][x].style,
        backgroundColor: ""
      };
      
      if (squares[yAxis][xAxis] && squares[yAxis][xAxis].player === this.state.player) {
        this.setState({
          status: "Wrong selection. Choose valid source and destination again.",
          sourceSelection: -1
        });
      } else {
        const squares = this.state.squares.slice();
        
        // const isMovePossible,isMoveLegal;

        if (this.isMoveLegal){//isMovePossible && isMoveLegal) {
          squares[yAxis][xAxis] = squares[this.state.sourceSelection];
          squares[this.state.sourceSelection] = null;
          let player = this.state.player === 1 ? 2 : 1;
          let turn = this.state.turn === "red" ? "green" : "red";
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
    }
  }

  /**
   * Check all path indices are null. For one steps move of pawn/others or jumping moves of knight array is empty, so  move is legal.
   * @param  {[type]}  srcToDestPath [array of board indices comprising path between src and dest ]
   * @return {Boolean}
   */
  isMoveLegal(srcToDestPath) {
    let isLegal = true;
    for (let i = 0; i < srcToDestPath.length; i++) {
      if (this.state.squares[srcToDestPath[i]] !== null) {
        isLegal = false;
      }
    }
    return isLegal;
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
