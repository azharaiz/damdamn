import React from "react";
import Tree from "../sprites/tree/tree_purple.png";
import "../../style/board/tree.css";
class TreeBox extends React.Component {
    render() {
        return (
            <div className="tree-div">
                <img src={Tree} alt="purple-tree" className="purpletree-img" />
            </div>
        )
    }
}

export default TreeBox;