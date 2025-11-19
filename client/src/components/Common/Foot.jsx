import React from "react";
import "../../App.css";

export default function Foot() {
  return (
    <div className="foot ">
      <div className="box mb-8">
        <h1 className="ready text-white  mb-5">Ready to Get Started?</h1>
        <span className="join text-white  ">
          Join thousands of volunteers and NGOs making a difference
        </span>
      </div>
      <div className="btn ">
        <button className="vlog bg-white px-5 py-2 ">Volunteer Login</button>
        <button className="nlog text-white px-5 py-2 ">Leads Login</button>
      </div>
    </div>
  );
}
