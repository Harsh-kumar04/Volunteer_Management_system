import React from "react";
import Nav from "../components/Common/Nav";
import Foot from "../components/Common/Foot";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";

function Home() {
  return (
    <div className="page">
      <Hero />
      <HowItWorks />
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default Home;
