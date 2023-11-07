import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



export const Progress = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-0 items-center border border-black px-3 md:px-10 rounded-[1.23rem]">
        <h2 className="">What We Had So Far</h2>

        <div className="w-full h-auto p-5  grid grid-cols-2 md:grid-cols-3 justify-between gap-x-5 md:gap-x-16 gap-y-5 ">



          <div className=" inner h-full w-full rounded-full flex justify-center items-center shadow-inner">
            <div className="relative w-20 md:w-7rem">
              <CircularProgressbar value={65} />
              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold">65%</h2>
            </div>
          </div>

          <div className=" inner h-full w-full rounded-full flex justify-center items-center shadow-inner">
            <div className="relative w-20 md:w-7rem">
              <CircularProgressbar value={53} />
              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold">53%</h2>
            </div>
          </div>


          <div className=" inner h-full w-full rounded-full flex justify-center items-center shadow-inner">
            <div className="relative w-20 md:w-7rem">
              <CircularProgressbar value={41} />
              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold">41%</h2>
            </div>
          </div>



          <div className=" inner h-full w-full rounded-full flex justify-center items-center shadow-inner">
            <div className="relative w-20 md:w-7rem">
              <CircularProgressbar value={10} />
              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold">10%</h2>
            </div>
          </div>


          <div className=" inner h-full w-full rounded-full flex justify-center items-center shadow-inner">
            <div className="relative w-20 md:w-7rem">
              <CircularProgressbar value={92} />
              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold">92%</h2>
            </div>
          </div>


          <div className=" inner h-full w-full rounded-full flex justify-center items-center shadow-inner">
            <div className="relative w-20 md:w-7rem">
              <CircularProgressbar value={70.4} />
              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold">70.4%</h2>
            </div>
          </div>





        </div>
      </div>
    </div>
  );
};
