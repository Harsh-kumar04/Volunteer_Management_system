import React from "react";
import "../.././App.css";
import { FaUser, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how-section">
      <h2 className="how-title">How It Works</h2>
      <p className="how-sub">Getting started is simple and straightforward</p>

      <div className="how-container">
        <div className="how-card">
          <div className="how-icon">
            <FaUser size={28} />
          </div>
          <h3>1. Create Account</h3>
          <p>Sign up as a volunteer or register your NGO in minutes</p>
        </div>

        <div className="how-card">
          <div className="how-icon">
            <FaCalendarAlt size={28} />
          </div>
          <h3>2. Browse Events</h3>
          <p>Discover volunteer opportunities that match your interests</p>
        </div>

        <div className="how-card">
          <div className="how-icon">
            <FaCheckCircle size={28} />
          </div>
          <h3>3. Make Impact</h3>
          <p>Apply to events and start making a difference today</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
