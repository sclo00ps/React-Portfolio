import React from "react";
import "./style.css";
import Image from "react-bootstrap/Image";

function Hero() {
  return (
    <div className="heroPhoto">
      <Image className="hero" src="./portfolio_image_4.jpg" />;
    </div>
    // <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    //   {props.children}
    // </div>
  );
}

export default Hero;