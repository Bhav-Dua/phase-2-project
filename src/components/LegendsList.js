import React from "react";
import LegendCard from "./LegendCard";

function LegendsList({ legends }) {
    
    const toDisplay = legends.map(legend => (
        <LegendCard 
        key={legend.id}
        id={legend.id}
        name={legend.name}
        img={legend.image}
        likes={legend.likes}
        />
    ))
    
    return (
        <div className="ui cards">
            {toDisplay}
        </div>
    )
}

export default LegendsList;