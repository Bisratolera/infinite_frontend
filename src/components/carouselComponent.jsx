import React from "react";
import { Carousels } from "./Carousel";

export const carouselComponent = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-center items-center">
        <h2 className="text-xl"> our partners</h2>
      </div>
      <div className="">
        <Carousels />
      </div>
    </div>
  );
};
