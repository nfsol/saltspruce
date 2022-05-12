import React from "react";
import navLogoSm from "../images/navLogoSm.png";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <img src={navLogoSm} className="logo" alt="Logo for Salt Spruce" />
          </a>
        </li>
        {/* <li>
        <a href="#contact">Contact us!</a>
        </li>
        <li>
        <a href="#contact">Contact us!</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
