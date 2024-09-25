import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
          Homely provides apartments and rooms for rent <br />
          in major EU cities on flexible lease terms
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">London, Uk</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Careers</span>
            <span>Affiliates</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
