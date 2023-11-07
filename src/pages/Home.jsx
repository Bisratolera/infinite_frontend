import React from "react";
import { Hero } from "../components/Hero";
import { Progress } from "../components/Progress";

const Home = () => {
  return (
    <div className="flex flex-col gap-2 w-full overflow-hidden">
      <Hero />
      <Progress />
    </div>
  );
};

export default Home;
