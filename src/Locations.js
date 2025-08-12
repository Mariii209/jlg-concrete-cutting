import React from "react";
import "./Locations.css";

export default function Locations() {
  return (
    <div className="Locations">
      <h2>Where We Cut</h2>
      <p className="LocationDescription">
        Professional concrete saw cutting across California. Fast mobilization
        to your job site statewide.
      </p>

      <div className="LocationContainer">
        <div className="LocationCard">
          <i class="fa-solid fa-location-dot"></i>
          <h3>Southern California</h3>
          <ul>
            <li>Los Angeles</li>
            <li>San Diego</li>
            <li>Orange County</li>
            <li>Riverside</li>
            <li>San Bernardino</li>
            <li>Ventura</li>
          </ul>
        </div>

        <div className="LocationCard">
          <i class="fa-solid fa-truck"></i>
          <h3>Central California</h3>
          <ul>
            <li>Fresno</li>
            <li>Bakersfield</li>
            <li>Stockton</li>
            <li>Modesto</li>
            <li>Salinas</li>
            <li>Central Valley</li>
          </ul>
        </div>

        <div className="LocationCard">
          <i class="fa-solid fa-gear"></i>
          <h3>Northern California</h3>
          <ul>
            <li>San Francisco Bay Area</li>
            <li>Sacramento</li>
            <li>San Jose</li>
            <li>Oakland</li>
            <li>Santa Rosa</li>
            <li>+ All CA Counties</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
