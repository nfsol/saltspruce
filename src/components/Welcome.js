import React from "react";
import shack from "../images/SmallShack.png";
const Welcome = () => {
  return (
    <div className="headerContainer">
      <div className="textContainer">
        <h1>It might be time to update your website.</h1>
        <p>
          {" "}
          Things move a little more slowly around here, but if your website
          looks like it should be on a stamp...
        </p>
      </div>
      <img
        src={shack}
        className="stamp"
        alt="A small red shed, surrounded by a sunbleached toppled wooden fence."
      />
      <button className="button welcomeButton" >
        We can help!
      </button>
    </div>
  );
};

export default Welcome;
