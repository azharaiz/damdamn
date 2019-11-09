import React from "react";

import Box from "./boardBox";
import "./index.css"

const boardRule = [
    [1,0,1,0,1],
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [0,0,1,0,0],
    [0,1,1,1,0],
    [1,0,1,0,1]
];

const boardData = boardRule.map((number) =>
    <div className="board">
        {
            number.map(function(type) {
                if (type === 1) {
                    return <Box contain="white"/>
                } else {
                    return <Box contain="black"/>
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