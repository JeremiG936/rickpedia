import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="container-fluid">
            <h1 className="text-center">This is not the page you're looking for...</h1>
            <Link to={"/"}>
                <button className="btn" style={{color: "black"}}>Go Home!</button>
            </Link>
        </div>
    )
}

export default NotFoundPage;