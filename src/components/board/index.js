import React from "react";

import FireBox from "./fire";
import TreeBox from "./tree";
import Box from "./boardBox";
import "./index.css"

const initBoard = [
    [3,0,3,0,3],
    [0,3,3,3,0],
    [0,0,3,0,0],
    [3,3,3,3,3],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [2,2,2,2,2],
    [0,0,2,0,0],
    [0,2,2,2,0],
    [2,0,2,0,2]
];

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameBoard: initBoard,
            gameState: null,
            pondPickCoordinate: [0,0],
            pondDropCoordinate: [0,0]
        }
    }

    setGameState(state) {
        this.setState({
            gameState: state
        });
    }

    setPickCoordinate(coordinateX, coordinateY) {
        this.setState({
            pondPickCoordinate: [coordinateX, coordinateY]
        })
    }

    setDropCoordinate(coordinateX, coordinateY) {
        this.setState({
            pondDropCoordinate: [coordinateX, coordinateY]
        });
        alert(coordinateY)
    }

    render() {
        const boardData = this.state.gameBoard.map((number, indexY) =>
            <div className="board">
                {
                    number.map(function(type, indexX) {
                            if (type === 0 ) {
                                return <Box contain="black" />
                            } else if (type === 1) {
                                return <Box contain = "white" coordinateX={indexX} coordinateY={indexY} />
                            } else if (type === 2) {
                                return <FireBox coordinateX={indexX} coordinateY={indexY} />
                            } else if (type === 3) {
                                return <TreeBox coordinateX={indexX} coordinateY={indexY} />
                            }
                            return false;
                        }
                    )}
            </div>
        );
        return(
            <div>
                { boardData }
            </div>
        );
    }
}

export default Board;