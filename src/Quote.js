import React from "react";
import "./Quote.css";
import Swal from "sweetalert2";

export default function Quote() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d592f3d6-2dac-9dd9-a5f665be3524");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset(); // Clear the form

        Swal.fire({
          title: "Message Sent!",
          text: "Thanks for reaching out. I'll get back to you soon!",
          icon: "success",
          confirmButtonColor: "#0F172B",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#e89064",
      });
    }
  };
  return (
    <div className="Quote" id="schedule-service">
      <h2>Get Your Same-Day Quote</h2>
      <p className="QuoteDescription">
        Call now or fill out the form below. Most quotes delivered within 2
        hours.
      </p>
      <div className="FullInfo">
        <form className="Contact-form" onSubmit={onSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="d592f3d6-2dac-9dd9-a5f665be3524"
          ></input>

          <div className="UserInfo">
            <div className="Container">
              <label htmlFor="">Company Name</label>
              <input
                type="text"
                id="company-name"
                name="Company Name"
                placeholder="ABC Construction"
                required
              />
            </div>
            <div className=" Container">
              <label htmlFor="">Contact Name</label>
              <input
                type="text"
                id="name"
                name="Contact Name"
                placeholder="Full Name"
                required
              />
            </div>
          </div>

          <div className="UserInfo">
            <div className="Container">
              <label htmlFor="">Email</label>
              <input
                type="email"
                id="email"
                name="Email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="Container">
              <label htmlFor="">Phone Number *</label>
              <input
                type="tel"
                name="Phone Number"
                id="phone-number"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>

          <div className="Service">
            <label htmlFor="">Project Type</label>
            <input
              type="text"
              name="Service"
              id="service"
              placeholder="Service you need..."
              required
            />
          </div>

          <div className="Message">
            <label htmlFor="">Project Details</label>
            <textarea
              id="services-needs"
              name="Project Details"
              placeholder="Linear feet needed, depth, location, timeline, special requirements..."
              required
            ></textarea>
          </div>

          <button type="submit">Send Quote Request</button>

          <span>Or call (209) 303-8897 for immediate assistance</span>
        </form>

        <div className="Information">
          <h3>Contact Information</h3>
          <div className="MoreInfoContainer">
            <a
              href="tel:+12093038897"
              className="CallToday"
              aria-label="Call (209) 303-8897"
            >
              <div>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="InfoItem">
                <p>(209) 303-8897</p>
                <span>Main line - quotes & scheduling</span>
              </div>
            </a>

            <a
              href="mailto:alejandro@jlgconcretesawcutting.com?subject=Quote%20request&body=Hi%20JLG%2C%20I%27d%20like%20a%20quote%20for..."
              className="ContactLink"
              aria-label="Email alejandro at jlg concrete saw cutting"
            >
              <div>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="InfoItem">
                <p>alejandro@jlgconcretesawcutting.com</p>
                <span>Email quotes & project photos</span>
              </div>
            </a>

            <div className="Days">
              <div>
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="InfoItem">
                <div>
                  <p>Mon-Fri: 6AM - 8PM</p>
                  <p>Sat-Sun: Emergency only</p>
                </div>
                <span>24/7 emergency response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
