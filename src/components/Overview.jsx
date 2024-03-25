import React from "react";

export const Overview = () => {
  return (
    <div className="flex flex-col gap-3 ml-7 overflow-x-auto max-w-full">
      <h5 style={{ textTransform: "uppercase" }} className="ml-3">
        top rated
      </h5>

      <div className="flex overflow-x-scroll flex-row gap-7 justify-center">
        {/*  */}
        <div className="flex flex-col overflow-x-auto">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 shadow-[#777]"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>Basics of HTML</p>
        </div>
        {/*  */}
        <div className="flex flex-col">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 shadow-[#777]"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>Basics of HTML</p>
        </div>
        {/*  */}
        <div className="flex flex-col">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 shadow-[#777]"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>Basics of HTML</p>
        </div>
        {/*  */}
        <div className="flex flex-col">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 shadow-[#777]"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>Basics of HTML</p>
        </div>
        {/*  */}
        <div className="flex flex-col">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 shadow-[#777]"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>Basics of HTML</p>
        </div>
      </div>
    </div>
  );
};
