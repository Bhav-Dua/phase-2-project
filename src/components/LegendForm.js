import React, { useState } from "react";

function LegendForm({ addLegend }) {

    const [formData, setFormData] = useState({name: "", tactical: "", ultimate: "", image: ""})

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:3001/legends", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(addLegend)

    }

    function handleFormData(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleFormData} />
            <br />
            <label htmlFor="tactical">Tactical </label>
            <input type="text" id="tactical" name="tactical" value={formData.tactical} onChange={handleFormData} />
            <br />
            <label htmlFor="ultimate">Ultimate </label>
            <input type="text" id="ultimate" name="ultimate" value={formData.ultimate} onChange={handleFormData} />
            <br />
            <label htmlFor="image">Image URL </label>
            <input type="text" id="image" name="image" value={formData.image} onChange={handleFormData} />
            <br />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default LegendForm;