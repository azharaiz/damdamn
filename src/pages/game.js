import React from "react";

import Board from "../components/board";
import {Link} from "react-router-dom";

class Game extends React.Component {
    render() {
        return(
            <div>
                <h1>The Game</h1>
                <Board/>
                <button><Link to="/">Back</Link></button>
            </div>
        );
    }
}

export default Game;