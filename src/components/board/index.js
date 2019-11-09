import React from "react";

import Box from "./boardBox";
import "./index.css"

const boardRule = [
    [2,-1,2,-1,2],
    [-1,2,2,2,-1],
    [-1,-1,2,-1,-1],
    [2,2,2,2,2],
    [2,2,2,2,2],
    [0,0,0,0,0],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [-1,-1,1,-1,-1],
    [-1,1,1,1,-1],
    [1,-1,1,-1,1]
];

const boardData = boardRule.map((number) =>
    <div className="board">
        {
            number.map(function(type) {
                if (type === -1) {
                    return <Box contain="black"/>
                } else if (type === 0){
                    return <Box contain="white"/>
                } else if (type === 1){
                    return <Box contain="red"/>
                } else {
                    return <Box contain="blue"/>
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