import React from "react";
import "./Locations.css";

export default function Locations() {
  return (
    <div className="Locations">
      <h2>Where We Cut</h2>
      <p className="LocationDescription">
        Professional concrete saw cutting across the Central Valley & Bay Area.
        Fast mobilization to your job site.
      </p>

      <div className="LocationContainer">
        <div className="LocationCard">
          <i class="fa-solid fa-location-dot"></i>
          <h3>Central Valley</h3>
          <ul>
            <li>Modesto</li>
            <li>Turlock</li>
            <li>Manteca</li>
            <li>Stockton</li>
            <li>Merced</li>
            <li>+ more cities</li>
          </ul>
        </div>

        <div className="LocationCard">
          <i class="fa-solid fa-truck"></i>
          <h3>Bay Area</h3>
          <ul>
            <li>San Francisco</li>
            <li>Oakland</li>
            <li>San Jose</li>
            <li>Berkeley</li>
            <li>Fremont</li>
            <li>+ more cities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
