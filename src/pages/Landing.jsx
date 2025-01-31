import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from "./Hero";

const Landing = () => {
  return (
    <div className="dark">
      <Navbar />
      <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
        <Hero />
      </section>
    </div>
  );
};

export default Landing;
