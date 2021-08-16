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

    
        <div className="titleR">
          <h5>Contacts</h5>
          <ul>
            <li className="list">
              <a href="#!">louginescott@gmail.com</a>
            </li>
            <li className="list">
              <a href="#!">https://github.com/sclo00ps</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright text-center">
        &copy; {new Date().getFullYear()} Copyright:{"L.K.Y. Enterprises, Inc. "}
      </div>
    </div>
  );
};

export default Footer;