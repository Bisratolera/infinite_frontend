import React from "react";
import { Hero } from "../components/Hero";
import { Progress } from "../components/Progress";
import { Carousels } from "../components/Carousel";
import { Overview } from "../components/Overview";
const Home = () => {
  return (
    <div className="flex flex-col gap-16 py-10">
      <Hero />
      <Progress />
      <Overview />
      <Overview />
      <Overview />
      <Overview />
      <Carousels />
    </div>
  );
};

export default Home;
