import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="FooterInfo">
        <div className="FooterSection">
          <div className="LogoContainer">
            <img src="/logo.jpg" alt="" />
            <div>
              <h3>JLG Concrete Cutting</h3>
              <span>Professional Saw Cutting</span>
            </div>
          </div>
          <p className="Description">
            Professional ground and flat saw cutting services throughout
            California. Fast, safe, and reliable.
          </p>
          <p className="Licensed">Licensed • Insured • OSHA 30</p>
        </div>
        <div className="FooterSection">
          <h4>Our Services</h4>

          <div className="ServicesContainer">
            <p>Concrete Slab Cutting</p>
            <p>Asphalt Saw Cutting</p>
            <p>Utility Trench Cutting</p>
            <p>Green Saw/Control Joints</p>
            <p>Emergency Service</p>
          </div>
        </div>

        <div className="FooterSection Us">
          <h4>Contact Us</h4>

          <div className="MoreUs">
            <a href="tel:2093038897">
              <i className="fa-solid fa-phone"></i>(209) 303-8897
            </a>

            <a href="mailto:alejandro@jlgconcretesawcutting.com">
              <i className="fa-regular fa-envelope"></i>
              alejandro@jlgconcretesawcutting.com
            </a>
          </div>
        </div>

        <div className="FooterSection">
          <h4>Business Hours</h4>
          <div className="Hours">
            <div className="HourContainer">
              <p>Monday - Friday</p>
              <span>7:00 AM - 4:30 PM</span>
            </div>

            <div className="HourContainer">
              <p>Sat-Sun</p>
              <span>Emergency Only</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Line"></div>
      <div className="MoreInfo">
        <p>© 2024 JLG Concrete Cutting. All rights reserved.</p>
        <p>Licensed Contractor #123456 • Fully Insured</p>
      </div>
    </div>
  );
}
