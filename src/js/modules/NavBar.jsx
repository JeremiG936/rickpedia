import { React, useState } from "react";
import { Link } from "react-router-dom";
import rickandmortylogo from "../../img/rickandmortylogo.png";
import SearchResult from "../pages/SearchResult";

const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    return (
            <nav className="container-fluid p-0">
                <div className="row align-items-center m-0">
                    <div className="col-2">
                        <Link to={"/"}>
                            <img src={rickandmortylogo} id="the-logo"></img>
                        </Link>
                    </div>
                    <div className="col">
                        <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..." className="me-3" id="search-bar"></input>
                        <Link to={searchTerm ? `/searchresult/${searchTerm}` : "*"}>
                            <button type="button" className="btn" id="search-btn">Search</button>
                        </Link>
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                        <Link to={"/characters"}>
                            <button className="btn">Characters</button>
                        </Link>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar;