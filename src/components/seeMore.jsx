import React from "react";
import { Button } from "flowbite-react";
export const seeMore = () => {
  function onPress() {}
  return (
    <div className="flex justify-center items-center relative">
      <Button onClick={onPress}>See More</Button>
    </div>
  );
};
