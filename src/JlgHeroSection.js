import React from "react";
import "./JlgHeroSection.css";

export default function JlgHeroSection() {
  return (
    <div
      className="JlgHeroSection"
      style={{
        backgroundImage: "url('/Truck.jpg')",
      }}
    >
      <div className="Specialists">
        <p>Ground/Flat Saw Specialists</p>
      </div>
      <h1>Precision Concrete & Asphalt Saw Cutting</h1>
      <p className="HeroDescription">
        Professional ground saw cutting for utility trenches, joint cutting, and
        selective removal. Fast mobilization, clean cuts, OSHA compliant.
      </p>
      <div className="HeroSectionButtons">
        <a
          href="tel:+12093038897"
          className="CallToday"
          aria-label="Call (209) 303-8897"
        >
          <i class="fa-solid fa-phone"></i>
          Call (209) 303-8897
        </a>
        <a
          href="#schedule-service"
          aria-label="Start your quote now"
          className="Quote"
        >
          Start Your Quote Now
        </a>
      </div>
      <div className="HeroStats">
        <div className="StatItem">
          <h5>OSHA</h5>
          <p>Certified</p>
        </div>

        <div className="StatItem">
          <h5>24hrs</h5>
          <p>Avg Response</p>
        </div>

        <div className="StatItem">
          <h5>100%</h5>
          <p>Insured</p>
        </div>
      </div>
    </div>
  );
}
