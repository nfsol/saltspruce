import React from "react";
import { Icon } from "@iconify/react";
import copyrightIcon from "@iconify/icons-uiw/copyright";
import logoFacebook from "@iconify/icons-carbon/logo-facebook";
import logoTwitter from "@iconify/icons-carbon/logo-twitter";
import logo from "../images/icon.png";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="bio">
          <h3>Who are we?</h3>
          <p>
            Salt Spruce is made up of a small group of geeks looking to help
            connect Newfoundland to the world.
          </p>
        </div>
        <div>
          <img
            src={logo}
            className="footerLogo"
            alt="Salt Spruce Logo. An outline of a tree in a water droplet."
          ></img>
        </div>
        <div className="socials">
          <Icon icon={logoFacebook} />

          <Icon icon={logoTwitter} />
        </div>
      </div>
      <div className="bottomLine">
        <Icon icon={copyrightIcon} /> 2022 Salt Spuce Media
      </div>
    </div>
  );
};

export default Footer;
