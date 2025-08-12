import React from "react";
import "./ChooseUs.css";

export default function ChooseUs() {
  return (
    <div className="ChooseUs">
      <h2>Why Contractors Choose Us</h2>
      <p className="ChooseUsDescription">
        We understand contractor needs: fast response, clean work, and no
        surprises.
      </p>
      <div className="ChooseUsContainer">
        <div className="ChooseUsCard">
          <i class="fa-solid fa-truck"></i>
          <h3>Fast Mobilization</h3>
          <p>
            Same-day service available. Most jobs start within 2-4 hours of your
            call.
          </p>
        </div>

        <div className="ChooseUsCard">
          <i class="fas fa-bullseye"></i>
          <h3>Clean, Precise Cuts</h3>
          <p>
            Diamond blade technology for straight, accurate cuts without
            chipping or damage.
          </p>
        </div>

        <div className="ChooseUsCard">
          <i class="fas fa-shield"></i>
          <h3>Dust & Slurry Control</h3>
          <p>
            Professional dust suppression and slurry management keeps your site
            clean.
          </p>
        </div>

        <div className="ChooseUsCard">
          <i class="fa-solid fa-circle-check"></i>
          <h3>Traffic Control</h3>
          <p>
            Licensed traffic control plans and equipment for street and public
            work.
          </p>
        </div>
      </div>
    </div>
  );
}
