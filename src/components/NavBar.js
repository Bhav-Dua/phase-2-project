import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to="/">Legends</NavLink>
            <NavLink to="/newLegend">Add A Legend</NavLink>
        </nav>
    )
}

export default NavBar;