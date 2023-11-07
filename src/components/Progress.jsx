import React from "react";
<<<<<<< HEAD
import { Card } from "flowbite-react";
import CountUp from "react-countup";
export const Progress = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <Card className=" ml-5 mr-5 relative rounded-3xl border-black w-[950px] h-[275px]">
        <div className="flex flex-col gap-0 items-center">
          <h2 className="">What We Had So Far</h2>
          <div className="flex flex-row gap-7 justify-center">
            <div classNameN="skill w-40 h-40 relative">
              <div className="outer h-40 w-40 rounded-full p-5 shadow-md">
                <div className="inner h-32 w-32 rounded-full flex justify-center items-center shadow-inner">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                    className=""
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke-linecap="round"
                      className=""
                    />
                  </svg> */}
                  <h2 className="font-bold">
                    <CountUp end={65} duration={5} />%
                  </h2>
                </div>
              </div>
            </div>
            <div classNameN="skill w-40 h-40 relative">
              <div className="outer h-40 w-40 rounded-full p-5 shadow-md">
                <div className="inner h-32 w-32 rounded-full flex justify-center items-center shadow-inner">
                  {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
              className=""
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
                className=""
              />
            </svg> */}
                  <h2 className="font-bold">65%</h2>
                </div>
              </div>
            </div>
            <div classNameN="skill w-40 h-40 relative">
              <div className="outer h-40 w-40 rounded-full p-5 shadow-md">
                <div className="inner h-32 w-32 rounded-full flex justify-center items-center shadow-inner">
                  {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
              className=""
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
                className=""
              />
            </svg> */}
                  <h2 className="font-bold">65%</h2>
                </div>
              </div>
            </div>
            <div classNameN="skill w-40 h-40 relative">
              <div className="outer h-40 w-40 rounded-full p-5 shadow-md">
                <div className="inner h-32 w-32 rounded-full flex justify-center items-center shadow-inner">
                  {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
              className=""
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#e91e63" />
                  <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke-linecap="round"
                className=""
              />
            </svg> */}
                  <h2 className="font-bold">65%</h2>
                </div>
              </div>
=======
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
>>>>>>> d638866cb3990de7b8bba91565d48efdc85d9a43
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
