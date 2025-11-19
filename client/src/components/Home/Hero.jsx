import React from "react";
import "../.././App.css";
function Hero() {
  return (
    <div className="hero ">
      <h1 className="class">
        Connecting NGOs and <br /> Volunteers
      </h1>
      <span className="make">
        Make a difference in your community. Join forces with organizations that
        need your skills and <br /> passion.
      </span>

      <div className="herobtn m-10">
        <button className="join-btn  px-5 py-3">
          Join as Volunteer
          <i class="fa-solid fa-arrow-right px-3"></i>
        </button>
        <button className="reg px-6 py-3  "> Register Leads </button>
      </div>
    </div>
  );
}

export default Hero;
