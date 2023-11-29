import { Card, Rating } from "flowbite-react";
import React from "react";

const Details = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-3">
          <Card className="object-cover m-6 rounded-2xl shadow-lg h-[320px]  w-[250px]    shadow-gray-500/50 flex flex-col gap-3">
            <img
              className="rounded-md top-0 h-[50%] mt-0"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <h2></h2>
            <Rating />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Details;
