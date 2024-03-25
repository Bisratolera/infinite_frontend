import React from "react";
import { Button } from "flowbite-react";
export const Seemore = () => {
  return (
    <div className="flex justify-center items-center relative">
      <Button
        href="/details"
        className="w-[200px] h-[50px] bg-[#000] border-[#fff]"
      >
        See More
      </Button>
    </div>
  );
};
