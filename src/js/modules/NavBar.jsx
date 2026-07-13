import React from "react";
import { Link } from "react-router-dom";
import rickandmortylogo from "../../img/rickandmortylogo.png";

const NavBar = () => {
    return (
            <nav className="container-fluid p-0">
                <div className="row align-items-center m-0">
                    <div className="col-2">
                        <Link to={"/"}>
                            <img src={rickandmortylogo} id="the-logo"></img>
                        </Link>
                    </div>
                    <div className="col">
                        <input type="text" placeholder="Search item..." id="search-bar"></input>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <Link to={"/characters"}>
                            <button className="btn">Characters</button>
                        </Link>
                        <Link to={"/locations"}>
                            <button className="btn">Locations</button>
                        </Link>
                        <Link to={"/episodes"}>
                            <button className="btn">Episodes</button>
                        </Link>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar;