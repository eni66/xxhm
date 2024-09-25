import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">We're eager to hear from you!</span>
          <span className="secondaryText">
            Our realtors are always ready to help by providing the best services for you. We
            beleive a good place to live can make your life better{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexColStart detail">
                    <span className="primaryText">We’re Fast</span>
                    <span className="secondaryText">Check housing off your to-do list, 
                      and find your footing in a new place ASAP.</span>
                  </div>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexColStart detail">
                    <span className="primaryText">We’re Flexible</span>
                    <span className="secondaryText">Rent from 1-18 months and easily extend 
                      your lease as you go.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexColStart detail">
                    <span className="primaryText">We’re Customizable</span>
                    <span className="secondaryText">Rent furnished or unfurnished, you can enjoy
                       our furniture and decor or bring your own.</span>
                  </div>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexColStart detail">
                    <span className="primaryText">We’re Fair</span>
                    <span className="secondaryText">Pay fair market rates and enjoy our premium services.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
