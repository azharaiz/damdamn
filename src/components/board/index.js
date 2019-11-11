import React from "react";

import FireBox from "./fire";
import TreeBox from "./tree";
import Box from "./boardBox";
import "./index.css"

const boardRule = [
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
            gameBoard: boardRule,
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
        const boardData = this.state.gameBoard.map((number, index) =>
            <div className="board">
                {
                    number.map(function(type) {
                            if (type === 0 ) {
                                return <Box contain="black" />
                            } else if (type === 1) {
                                return <Box contain = "white" coordinateX={type} coordinateY={index} />
                            } else if (type === 2) {
                                return <FireBox coordinateX={type} coordinateY={index} />
                            } else if (type === 3) {
                                return <TreeBox coordinateX={type} coordinateY={index} />
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