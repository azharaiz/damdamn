import React from "react";
import { Link } from "react-router-dom";

const notFound = () => {
    return(
        <div>
            <h1>404</h1>
            <h2>Not Found</h2>
            <h3>Go back to <button><Link to="/">Home Page</Link></button></h3>
        </div>
    );
};

export default notFound;