import React from "react";

function LegendCard({ id, name, img}) {

    return (
        <div className="ui card">
            <div className="image">
                <img src={img} alt={name} />
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
            </div>
        </div>
    )
}

export default LegendCard;