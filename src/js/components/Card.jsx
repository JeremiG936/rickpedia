import React from "react";
import ricktemp from "../../img/ricktemp.jpg"

const Card = (props) => {
    return (
        <div className="d-flex m-2" id="card">
            <img src={props.image} id="card-img"></img>
            <div className="d-flex flex-column ps-2" id="card-body">
                <h5 className="text-center mb-2">{props.name}</h5>
                <span>Status: {props.status}</span>
                <span>Species: {props.species}</span>
                <span>Type: {props.type}</span>
                <span>Gender: {props.gender}</span>
                <span>Origin: {props.origin}</span>
                <span>Location: {props.location}</span>
            </div>
        </div>
    )
}

export default Card;