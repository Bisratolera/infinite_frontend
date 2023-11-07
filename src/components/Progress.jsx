import React from "react";
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
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
