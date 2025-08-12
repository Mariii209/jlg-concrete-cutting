import React from "react";
import "./Serve.css";

export default function Serve() {
  return (
    <div className="Serve">
      <h2>Industries We Serve</h2>
      <p className="ServeDescription">
        Trusted by contractors, municipalities, and property managers across the
        region.
      </p>
      <div className="ServeContainer">
        <div className="ServeCard">
          <i class="fa-solid fa-road-barrier"></i>
          <h3>General Contractors</h3>
        </div>

        <div className="ServeCard">
          <i class="fa-solid fa-gear"></i>
          <h3>Plumbers</h3>
        </div>

        <div className="ServeCard">
          <i class="fa-solid fa-bolt"></i>
          <h3>Electricians</h3>
        </div>

        <div className="ServeCard">
          <i class="fa-solid fa-truck"></i>
          <h3>Utility Companies</h3>
        </div>

        <div className="ServeCard">
          <i class="fa-solid fa-location-dot"></i>
          <h3>Property Managers</h3>
        </div>

        <div className="ServeCard">
          <i class="fa-solid fa-shield"></i>
          <h3>Municipalities</h3>
        </div>
      </div>
    </div>
  );
}
