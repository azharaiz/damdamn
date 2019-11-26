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

  handleClick(i) {
    const squares = this.state.squares.slice();

    if (this.state.sourceSelection === -1) {
      if (!squares[i] || squares[i].player !== this.state.player) {
        this.setState({
          status:
            "Wrong selection. Choose player " + this.state.player + " pieces."
        });
        if (squares[i]) {
          squares[i].style = { ...squares[i].style, backgroundColor: "" };
        }
      } else {
        squares[i].style = {
          ...squares[i].style,
          backgroundColor: "RGB(220,220,220)"
        }; // Emerald from http://omgchess.blogspot.com/2015/09/chess-board-color-schemes.html
        this.setState({
          status: "Choose destination for the selected piece",
          sourceSelection: i
        });
      }
    } else if (this.state.sourceSelection > -1) {
      squares[this.state.sourceSelection].style = {
        ...squares[this.state.sourceSelection].style,
        backgroundColor: ""
      };
      if (squares[i] && squares[i].player === this.state.player) {
        this.setState({
          status: "Wrong selection. Choose valid source and destination again.",
          sourceSelection: -1
        });
      } else {
        const squares = this.state.squares.slice();
        const isDestEnemyOccupied = squares[i] ? true : false;
        const diffSrcDest = i - this.state.sourceSelection;
        let enemy = 0;
        let enemyBefore;
        if (diffSrcDest === 10) {
          enemy = i - 5;
        } else if (diffSrcDest === -10) {
          enemy = i + 5;
        } else if (diffSrcDest === 2) {
          enemy = i - 1;
        } else if (diffSrcDest === -2) {
          enemy = i + 1;
        } else if (diffSrcDest === 12) {
          enemy = i - 6;
        } else if (diffSrcDest === -12) {
          enemy = i + 6;
        } else if (diffSrcDest === 8) {
          enemy = i - 4;
        } else if (diffSrcDest === -8) {
          enemy = i + 4;
        }
        enemyBefore = squares[enemy];
        const isEnemyBeforeOccupied = enemyBefore ? true : false;
        const isMovePossible = squares[
          this.state.sourceSelection
        ].isMovePossible(
          this.state.sourceSelection,
          i,
          isDestEnemyOccupied,
          isEnemyBeforeOccupied
        );
        const srcToDestPath = squares[
          this.state.sourceSelection
        ].getSrcToDestPath(this.state.sourceSelection, i);
        const isMoveLegal = this.isMoveLegal(srcToDestPath);

        if (isMovePossible && isMoveLegal) {
          squares[i] = squares[this.state.sourceSelection];
          squares[this.state.sourceSelection] = null;
          if (isEnemyBeforeOccupied) {
            if (diffSrcDest === 12) {
              squares[i - 6] = null;
            } else if (diffSrcDest === -12) {
              squares[i + 6] = null;
            } else if (diffSrcDest === 10) {
              squares[i - 5] = null;
            } else if (diffSrcDest === -10) {
              squares[i + 5] = null;
            } else if (diffSrcDest === 8) {
              squares[i - 4] = null;
            } else if (diffSrcDest === -8) {
              squares[i + 4] = null;
            } else if (diffSrcDest === 2) {
              squares[i - 1] = null;
            } else if (diffSrcDest === -2) {
              squares[i + 1] = null;
            }
          }
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
              onClick={i => this.handleClick(i)}
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
