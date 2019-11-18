import React from "react";
import Fire from "../sprites/fire/fire_blue01.png"
import "../../style/board/fire.css"



class FireBox extends React.Component {
    render() {
        return (
            <div className="bluefire-div">
                <img className="bluefire-img" src={Fire} alt="fire-blue"/>
            </div>
        )
    }
}

export default FireBox;