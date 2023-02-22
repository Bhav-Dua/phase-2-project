import React from "react";
import Legend from "./Legend";

function LegendsList({ legends }) {
    
    const toDisplay = legends.map(legend => (
        <Legend 
        key={legend.id}
        id={legend.id}
        name={legend.name}
        img={legend.image}
        likes={legend.likes}
        />
    ))
    
    return (
        <div>
            {toDisplay}
        </div>
    )
}

export default LegendsList;