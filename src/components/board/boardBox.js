import React from "react";

import "../../style/board/boardBox.css"

class BoardBox extends React.Component {
    render() {
        return(
            <button className={`box ${this.props.contain}`} onClick={this.props.onClick} />
        );
    }
}

export default BoardBox;