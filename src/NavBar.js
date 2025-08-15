import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="NavBar">
      <nav className="NavBarInfo">
        <div className="MainLogoInfo">
          <img src="/logo.jpg" alt="" />
          <div className="BusinessName">
            <h2>JLG Concrete Cutting</h2>
            <p>Professional Saw Cutting</p>
          </div>
        </div>

        <div className="LinksContainer">
          <a href="#servies">Services</a>
          <a href="#schedule-service">Contact</a>
        </div>

        <div className="BookingContainer">
          <a href="tel:2093038897" className="PhomeInfo">
            <i className="fa-solid fa-phone"></i>
            <p>(209) 303-8897</p>
          </a>
          <a href="#schedule-service" className="BookNow">
            Start Your Quote Now
          </a>
        </div>

        <button
          className="MenuToggle"
          onClick={() => setShowMenu(true)}
          aria-label="Open menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>

      {/* Overlay background */}
      {showMenu && (
        <div className="OverLay" onClick={() => setShowMenu(false)} />
      )}

      {/* Side drawer menu */}
      <div className={`SideMenu ${showMenu ? "Show" : ""}`}>
        <button
          className="CloseBtn"
          onClick={() => setShowMenu(false)}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Header */}
        <div className="MenuHeader">
          <img src="/logo.jpg" alt="" />
          <div className="HeadinTitle">
            <h3>JLG Concrete Cutting</h3>
            <p>Professional Saw Cutting</p>
          </div>
        </div>
        <div className="NavContactInfo">
          {/* Navigation */}
          <p className="MenuSectionTitle">Navigation</p>
          <ul>
            <li>
              <a href="#servies" onClick={() => setShowMenu(false)}>
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <p>Services</p>
              </a>
            </li>
            <li>
              <a href="#schedule-service" onClick={() => setShowMenu(false)}>
                <i className="fa-regular fa-envelope"></i>
                <p>Contact</p>
              </a>
            </li>
          </ul>

          {/* Contact Info */}
          <p className="MenuSectionTitle">Contact Info</p>
          <ul>
            <li>
              <a href="tel:2093038897" onClick={() => setShowMenu(false)}>
                <i className="fa-solid fa-phone"></i>
                <p>(209) 303-8897</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:alejandro@jlgconcretesawcutting.com"
                onClick={() => setShowMenu(false)}
              >
                <i className="fa-solid fa-envelope"></i>
                <p>alejandro@jlgconcretesawcutting.com</p>
              </a>
            </li>
          </ul>

          {/* Footer Button */}
          <div className="MenuFooter">
            <a href="#schedule-service" onClick={() => setShowMenu(false)}>
              <button className="EmergencyBtn">Start Your Quote Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
