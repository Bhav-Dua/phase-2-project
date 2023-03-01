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
        <div className="legend-Page">
            <div className="legend-image">
                <img src={legend.image} alt={legend.name} />
            </div>
            <div className="legend-content">
                <h1>{legend.name}</h1>
                <h2>Abilities</h2>
                <p><b>Passive: </b>{legend.passive}<br />
                    <b>Tactical: </b>{legend.tactical}<br />
                    <b>Ultimate: </b>{legend.ultimate}
                </p>
            </div>
        </div>
    )
}

export default LegendPage;