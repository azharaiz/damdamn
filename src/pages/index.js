import React from 'react';
import  { Link } from "react-router-dom";

class Index extends React.Component {
    render() {
        return(
            <div className="App">
                <h1>Dam Damn</h1>
                <h2>Lets Play Dam Daman</h2>
                <button><Link to="/setup">Start Game!</Link></button>
                <button><Link to="/about">About</Link></button>
            </div>
        );
    }
}

export default Index;