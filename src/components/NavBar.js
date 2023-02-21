import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/legends">Legends</NavLink>
            <NavLink to="/newLegend">Add A Legend</NavLink>
            <NavLink to="/mostLiked">Most Liked</NavLink>
        </nav>
    )
}

export default NavBar;