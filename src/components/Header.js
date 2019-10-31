import React, { useState } from "react";
import logo from "../images/logo.png";

export const Header = ({ openMenuList }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="header">
      <div
        className="header_logo"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img src={logo} alt="logo"></img>
        <h2>
          Gl<span className="move_letter">o</span>bal
        </h2>
      </div>
      <div className="header-menu_btn" onClick={() => openMenuList()}>
        <span></span>
      </div>
    </div>
  );
};
