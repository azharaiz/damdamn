import React from 'react';

import '../index.css';
import Square from './boardBox';

export default class Board extends React.Component {

    renderSquare(i, j, squareShade) {
        return <Square
            piece = {this.props.squares[i][j]}
            style = {this.props.squares[i][j]? this.props.squares[i][j].style : null}
            shade = {squareShade}
            onClick={() => this.props.onClick([i,j])}
        />
    }

    render() {
        const board = [];
        for(let i = 0; i < 11; i++){
            const squareRows = [];
            for(let j = 0; j < 5; j++){
                squareRows.push(this.renderSquare(i, j, "square"));
            }
            board.push(<div className="board-row">{squareRows}</div>)
        }

        return (
            <div>
                {board}
            </div>
        );
    }
}

function isEven(num){
    return num % 2 === 0;
}