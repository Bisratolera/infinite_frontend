import React from "react";
import { Hero } from "../components/Hero";
import { Progress } from "../components/Progress";
// import { Overview } from "../components/Overview";
const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <Hero />
      <Progress />
      {/* <Overview />
      <Overview />
      <Overview />
      <Overview /> */}
    </div>
  );
};

export default Home;
