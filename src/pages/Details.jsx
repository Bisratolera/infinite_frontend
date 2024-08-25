import { Button, Card, Rating } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import React from "react";

const Details = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white transition-colors">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-3 m-3 justify-center items-center">
          <input
            type="text"
            className="rounded-full w-[450px] dark:bg-slate-800"
            placeholder="search courses"
          />
          <Button outline pill color="dark">
            <FaSearch className="w-[20px] h-[20px]" />
          </Button>
        </div>
        <div className="flex flex-row gap-3 m-3">
        <div
  className="w-[350px] h-auto rounded-3xl font-kanit border shadow-md overflow-hidden"
  href="/courses"
>
  <video
    className="w-full h-52 object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="programing1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="p-4">
    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
      Data Analyst
    </h5>
    <div className="flex items-center my-2">
      <span className="text-yellow-500 mr-1">★★★★★</span>
      <span className="text-sm text-gray-600 dark:text-gray-400">Intermediate</span>
    </div>
    <div className="flex items-center justify-between">
      <button className="text-xs font-medium text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
        See more
      </button>
      <button className="text-gray-500 dark:text-gray-400">
        ❤️
      </button>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Details;
