import React from "react";

export const Overview = () => {
  return (
    <div className="flex flex-col gap-3 ml-7 overflow-x-auto max-w-full font-kanit dark:bg-gray-950 dark:text-white transition-colors">
      <h5
        style={{ textTransform: "uppercase" }}
        className="ml-3 dark:text-white"
      >
        top rated
      </h5>
      <div
        className="grid overflow-x-auto xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5  justify-center"
        style={{ width: "100%" }}
      >
        {/*  */}
        <div className="flex flex-col dark:bg-gray-950 dark:text-white">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 shadow-[#777]"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>Basics of HTML</p>
        </div>
        {/* Add more card elements as needed */}
        {/* Example additional card element */}
        <div className="flex flex-col">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 shadow-[#777] dark:shadow-cyan-500/50"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>BASICS OF HTML</p>
        </div>
        <div className="flex flex-col">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 shadow-[#777] dark:shadow-cyan-500/50"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>BASICS OF HTML</p>
        </div>
        <div className="flex flex-col dark:bg-gray-950 dark:text-white">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 shadow-[#777] dark:shadow-cyan-500/50"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>BASICS OF HTML</p>
        </div>
        <div className="flex flex-col">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 shadow-[#777] dark:shadow-cyan-500/50"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>BASICS OF HTML</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
