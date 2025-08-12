import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div className="Services">
      <h2>Our Specialized Services</h2>
      <p className="ServicesDescription">
        We focus exclusively on ground and flat saw cutting. No coring, no wall
        cuts, no full demolition—just precision flat work.
      </p>
      <div className="ServicesContainer">
        <div className="ServiceCard">
          <div className="ServiceTitle">
            <i class="fa-solid fa-road-barrier"></i>
            <h4>Concrete Slab Cutting</h4>
          </div>
          <p>Clean, straight cuts in concrete slabs up to 14" deep</p>
          <ul>
            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Basement floors & foundations</p>
            </li>

            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Warehouse & industrial floors</p>
            </li>

            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Sidewalks & driveways</p>
            </li>
          </ul>
        </div>

        <div className="ServiceCard">
          <div className="ServiceTitle">
            <i class="fas fa-bullseye"></i>
            <h4>Asphalt Saw Cutting</h4>
          </div>
          <p>Precise cuts for utility work and pavement repairs</p>
          <ul>
            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Street & parking lot cuts</p>
            </li>

            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Pothole prep & patching</p>
            </li>

            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Utility access openings</p>
            </li>
          </ul>
        </div>

        <div className="ServiceCard">
          <div className="ServiceTitle">
            <i class="fas fa-bolt-lightning"></i>
            <h4>Utility Trench Cutting</h4>
          </div>
          <p>Perfect cuts for plumbing, electrical, and gas lines</p>
          <ul>
            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Plumbing & drain lines</p>
            </li>

            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Electrical conduit runs</p>
            </li>

            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Gas line installations</p>
            </li>
          </ul>
        </div>

        <div className="ServiceCard">
          <div className="ServiceTitle">
            <i class="fa-solid fa-stopwatch"></i>
            <h4>Green Saw/Control Joints</h4>
          </div>
          <p>Early-entry cutting to prevent random cracking</p>
          <ul>
            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Fresh concrete cutting</p>
            </li>

            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Expansion joint creation</p>
            </li>

            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Crack prevention</p>
            </li>
          </ul>
        </div>

        <div className="ServiceCard">
          <div className="ServiceTitle">
            <i class="fa-solid fa-gear"></i>
            <h4>Small-Medium Removals</h4>
          </div>
          <p>Selective concrete removal for repairs and access</p>
          <ul>
            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Patch removal for repairs</p>
            </li>

            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Access panel creation</p>
            </li>

            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Foundation modifications</p>
            </li>
          </ul>
        </div>

        <div className="ServiceCard">
          <div className="ServiceTitle">
            <i class="fas fa-exclamation-triangle"></i>
            <h4>Emergency Cutting</h4>
          </div>
          <p>24/7 emergency response for urgent projects</p>
          <ul>
            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Water main breaks</p>
            </li>

            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Gas line emergencies</p>
            </li>

            <li>
              <i class="fa-solid fa-circle-check"></i>
              <p>Storm damage access</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
