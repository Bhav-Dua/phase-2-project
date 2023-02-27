import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function LegendPage() {

    const [legend, setLegend] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/legends/${id}`)
            .then(r => r.json())
            .then(data => setLegend(data))
    }, [id])

    if (!legend) return <></>;

    return (
        <div className="legend_Page">
            <div className="legend_Image">
                <img src={legend.image} alt={legend.name} />
            </div>
            <div className="legend_Content">
                <h1>{legend.name}</h1>
                <h2>Abilities</h2>
                <ul>
                    <li><b>Passive: </b>{legend.passive}</li>
                    <li><b>Tactical: </b>{legend.tactical}</li>
                    <li><b>Ultimate: </b>{legend.ultimate}</li>
                </ul>
            </div>
        </div>
    )
}

export default LegendPage;