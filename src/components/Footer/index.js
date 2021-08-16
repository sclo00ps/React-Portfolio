import React from "react";
import "./style.css";
//import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="footer heroBG">
      <div className="titleAndInfo">
        <div className="titleL">
          <h3>Professional Portolio</h3>
          <p>Nudging my way into a new career!</p>
        </div>

    
       

      <div className="footer-copyright text-center">
        &copy; {new Date().getFullYear()} Copyright:{"L.K.Y. Enterprises, Inc."}
      </div>
    </div>
  </div>

  );
};

export default Footer;