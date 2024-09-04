import React from "react";
import { Hero } from "../components/Hero";
import { Carousels } from "../components/Carousel";
import { Overview } from "../components/Overview";
import { Seemore } from "../components/seeMore";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
const Home = () => {
  return (
    <div className="flex flex-col gap-16">
       <Nav />
      <Hero />
      <Carousels />
      <Overview />
      <Seemore />
      <Footer />
    </div>
  );
};

export default Home;
