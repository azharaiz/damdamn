import React from "react";

import FireBox from "./fire";
import TreeBox from "./tree";
import Box from "./boardBox";
import "../../style/board/index.css"

const boardRule = [
    [3,1,3,1,3],
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

const boardData = boardRule.map((number, index) =>
    <div className="board">
        {
            number.map(function(type) {
                if (type === 2 ) {
                    return <FireBox coordinateX={type} coordinateY={index} />
                } else if (type === 1) {
                    return <Box contain = "white" coordinateX={type} coordinateY={index} />
                } else if (type === 3) {
                    return <TreeBox coordinateX={type} coordinateY={index} />
                } else {
                    return <Box contain="black" />
                }
            }
        )}
    </div>
);

class Board extends React.Component {
    render() {
        return(
            <div>
                <h2>The Board</h2>
                { boardData }
            </div>
        );
    }
}

export default Board;