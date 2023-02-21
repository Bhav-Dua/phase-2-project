import React from "react";
import logo from "../apexLogo.png";
import NavBar from "./NavBar";

function Header() {
    return (
      <div className="header">
        <img className="logo" src={logo} alt="Apex Legends" />
        <NavBar />
      </div>
        
    )
}

export default Header;