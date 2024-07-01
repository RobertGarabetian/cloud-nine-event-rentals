import React from "react";
import MidSection from "./components/MidSection";
import Hero from "./components/Hero";

const Home = () => {
  window.scrollTo(0, 0);

  return (
    <div className="w-screen">
      <Hero />
      <MidSection />
    </div>
  );
};

export default Home;
