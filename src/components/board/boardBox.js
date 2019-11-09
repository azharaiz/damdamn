import React from "react";

import "./boardBox.css"

class BoardBox extends React.Component {
    render() {
        return(
            <div className={`box ${this.props.contain}`} />
        );
    }
}

export default BoardBox;