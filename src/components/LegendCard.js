import React from "react";
import { Link } from "react-router-dom";

function LegendCard({ id, name, img }) {

    return (
        <div className="ui card">
            <div className="image">
                <img src={img} alt={name} />
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
            </div>
            <Link to={`/legends/${id}`}>See more...</Link>
        </div>
    )
}

export default LegendCard;