import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";
// import "../index.css";

const progresses = [
  {
    value: 0,
  },
  {
    value: 30,
  },
  {
    value: 80,
  },
  {
    value: 80,
  },
];

export const Progress = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue();
  }, []);
  return (
    <div className="flex justify-center w-full font-kanit">
      <div className="flex flex-col gap-0 items-center border border-black px-3 md:px-10 rounded-[1.23rem]">
        <h2 className="text-white what-we-do">What We Had So Far</h2>
        <div className="inner min-h-[13rem] w-full rounded-full flex gap-10 justify-center items-center shadow-inner">
          {progresses.map((prog, index) => (
            <div className="relative w-20 md:w-7rem" key={index}>
              <CircularProgressbar
                value={prog.value}
                strokeWidth={12}
                counterClockwise={true}
                styles={buildStyles({
                  pathColor: `rgb(10, 10, 10)`,
                })}
              />
              <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold">
                <CountUp end={prog.value} duration={index * 1.2} />
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
