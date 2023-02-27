import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink className="link" to="/">Legends</NavLink>
            <NavLink className="link" to="/newLegend">Add A Legend</NavLink>
        </nav>
    )
}

export default NavBar;