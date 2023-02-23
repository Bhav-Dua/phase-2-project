import React, { useEffect, useState } from "react";

function LegendPage() {

    const [legend, setLegend] = useState(null);

    const id = 1;

    useEffect(() => {
        fetch(`http://localhost:3001/legends/${id}`)
            .then(r => r.json())
            .then(data => console.log(data))
    }, [id])


}

export default LegendPage;