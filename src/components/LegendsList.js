import React from "react";
import { Card } from "semantic-ui-react";

function LegendsList({ legends }) {
    
    const toDisplay = legends.map(legend => (
        <Card />
    ))
    
}

export default LegendsList;