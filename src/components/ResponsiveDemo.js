import React from "react";
import responsive from "../images/responsive.png";
const ResponsiveDemo = () => {
  return (
    <div className="demoContainer">
      <div className="placeholder">
        <h1>Responsive by Default</h1>
        <p>
          More than half of your customers are interacting with your services
          using a mobile device. Your website needs to work everywhere.{" "}
        </p>
      </div>
      <img className="demoImage" src={responsive} alt="placeholder" />
    </div>
  );
};

export default ResponsiveDemo;
