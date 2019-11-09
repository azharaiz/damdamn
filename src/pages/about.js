import React from "react";
import { Link } from "react-router-dom";

const about = () => {
    return (
        <div>
            <h1>About Page</h1>
            <button><Link to="/">Home</Link></button>
        </div>
    );
};

export default about;