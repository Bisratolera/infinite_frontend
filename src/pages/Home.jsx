import React from "react";
import { Hero } from "../components/Hero";
import { Carousels } from "../components/Carousel";
import { Overview } from "../components/Overview";
import { Seemore } from "../components/seeMore";
const Home = () => {
  return (
    <div className="flex flex-col gap-16 py-10">
      <Hero />
      <Carousels />
      <Overview />
      <Seemore />
    </div>
  );
};

export default Home;
