import React from "react";
import VideoPage from "./VideoPage";
import  Side  from "../components/Side";
import CourseTable from "../components/CourseTable";
import { Button, Card, TextInput } from "flowbite-react";
import { FaSearch, FaRegBell,FaWalking,FaClock } from "react-icons/fa";
import { Doughnut } from 'react-chartjs-2';
import { MdBookmarkAdd } from "react-icons/md";
import { SiNike } from "react-icons/si";
import { PiCertificateFill } from "react-icons/pi";
import ContinueLearningCard from "../components/ContinueLearningCard";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

  
const Account = () => {
  const data = {
    labels: ['Design', 'Code', 'Business', 'Data'],
    datasets: [
      {
        data: [40, 30, 20, 10], // The values corresponding to Design, Code, Business, and Data
        backgroundColor: ['#A78BFA', '#8B5CF6', '#6366F1', '#312E81'],
        hoverBackgroundColor: ['#A78BFA', '#8B5CF6', '#6366F1', '#312E81'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '75%',
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
  };
  const courses = [
    {
      category: 'DESIGN',
      title: 'UI/UX Design',
      completedLessons: 12,
      totalLessons: 16,
      percentage: 75,
      imageUrl: 'path-to-your-design-image.png',
    },
    {
      category: 'CODE',
      title: 'Cyber Security',
      completedLessons: 20,
      totalLessons: 30,
      percentage: 60,
      imageUrl: 'path-to-your-cyber-security-image.png',
    },
    {
      category: 'DATA',
      title: 'Learn Data Analyst',
      completedLessons: 8,
      totalLessons: 20,
      percentage: 40,
      imageUrl: 'path-to-your-data-analyst-image.png',
    },
  ];

  return (
    <section className="w-full h-full items-start justify-start">
      <div className="flex flex-row  gap-2 dark:bg-gray-950 dark:text-white transition-colors ">
        <div className="">
          <Side />

        </div>
        <div className="flex  flex-col gap-2 pl-40">
        {/* Search bar */}
        <form className="max-w-md mx-auto">   
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-[500px] p-2 mt-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="try search programing course" required />
            </div>
        </form>
        {/* Dash bord  */}
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold dark:text-white">Dashboard</h2>
            <div className="flex flex-row gap-8 m-3 ">
          <card
            className=" w-[170px] flex bg-white h-[120px]  p-5  rounded-xl font-kanit shadow-sm shadow-gray-600  dark:shadow-cyan-500"
          >
           
            <div className="flex flex-col gap-4">
            <p className="w-full flex gap-2  text-xl"> <FaWalking className="bg-blue-600 rounded-md text-2xl text-white p-1 "/>OnGoing</p>
            <p className="text-4xl font-medium">5</p>
            </div>
          </card>
          <card
            className=" w-[170px] flex bg-white h-[120px]  p-5  rounded-xl font-kanit shadow-sm shadow-gray-600  dark:shadow-cyan-500"
          >
           
            <div className="flex flex-col gap-4">
            <p className="w-full flex gap-2  text-xl"> <SiNike className="bg-green-500 rounded-md text-2xl text-white p-1 "/>OnGoing</p>
            <p className="text-4xl font-medium">15</p>
            </div>
          </card>
          <card
            className=" w-[170px] flex bg-white h-[120px]  p-5  rounded-xl font-kanit shadow-sm shadow-gray-600  dark:shadow-cyan-500"
          >
           
            <div className="flex flex-col gap-4">
            <p className="w-full flex gap-2  text-xl"> <PiCertificateFill className="bg-yellow-500 rounded-md text-2xl text-white p-1 "/>OnGoing</p>
            <p className="text-4xl font-medium">45</p>
            </div>
          </card>
          <card
            className=" w-[170px] flex bg-white h-[120px]  p-5  rounded-xl font-kanit shadow-sm shadow-gray-600  dark:shadow-cyan-500"
          >
           
            <div className="flex flex-col gap-4">
            <p className="w-full flex gap-2  text-xl"> <FaClock className="bg-purple-500 rounded-md text-2xl text-white p-1 "/>OnGoing</p>
            <p className="text-4xl font-medium">25</p>
            </div>
          </card>
         
        </div>
          </div>
          {/* Couser Overview */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold dark:text-white">Course Overview</h2>
            <div className="flex flex-row gap-8 m-3 ">
          <card
            className=" w-[250px] h-[325px] bg-white   rounded-3xl font-kanit shadow-md shadow-gray-600 p-2 dark:shadow-cyan-500"
          >
            <img src="pexels-shkrabaanthony-5475784.jpg" className="h-44 rounded-xl" alt="imm" />
            <div className="mt-2">
            <p className="w-full flex justify-between  text-xl">Design <MdBookmarkAdd className="p-2 bg-gray-900 text-4xl text-white rounded-full"/></p>
            <h5 className="text-md font-normal tracking-tight text-gray-900 dark:text-white">
             Create 3D Bender with <br /> bender 
            </h5>
            <p className="text-gray-400">l6 lesson . 24 hour </p>
            </div>
           
          </card>
          <card
            className=" w-[250px] h-[325px] bg-white   rounded-3xl font-kanit shadow-md shadow-gray-600 p-2 dark:shadow-cyan-500"
          >
            <img src="pexels-shkrabaanthony-5475784.jpg" className="h-44 rounded-xl" alt="imm" />
            <div className="mt-2">
            <p className="w-full flex justify-between  text-xl">Design <MdBookmarkAdd className="p-2 bg-gray-900 text-4xl text-white rounded-full"/></p>
            <h5 className="text-md font-normal tracking-tight text-gray-900 dark:text-white">
             Create 3D Bender with <br /> bender 
            </h5>
            <p className="text-gray-400">l6 lesson . 24 hour </p>
            </div>
           
          </card>
          <card
            className=" w-[250px] h-[325px] bg-white   rounded-3xl font-kanit shadow-md shadow-gray-600 p-2 dark:shadow-cyan-500"
          >
            <img src="pexels-shkrabaanthony-5475784.jpg" className="h-44 rounded-xl" alt="imm" />
            <div className="mt-2">
            <p className="w-full flex justify-between  text-xl">Design <MdBookmarkAdd className="p-2 bg-gray-900 text-4xl text-white rounded-full"/></p>
            <h5 className="text-md font-normal tracking-tight text-gray-900 dark:text-white">
             Create 3D Bender with <br /> bender 
            </h5>
            <p className="text-gray-400">l6 lesson . 24 hour </p>
            </div>
           
          </card>
        </div>
          </div>
{/* My course */}

        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold dark:text-white">My Course </h2>
            <div className="flex flex-row gap-8 m-3 ">
          <CourseTable />
        </div>
          </div>

        </div>

      <section className="mt-10 flex flex-col">
      <h1 className="text-xl font-bold">Course Topic</h1>
      <div className=" w-[350px]  bg-white rounded-lg shadow p-6 relative">
            <div className="relative flex items-center justify-center">
              <Doughnut data={data} options={options} />
              <div className="absolute flex flex-col items-center">
                <h2 className="text-3xl font-bold">42</h2>
                <p className="text-gray-500">Total Course</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-300 rounded-full"></span>
                <span>Design (40%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <span>Code (30%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Business (20%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                <span>Data (10%)</span>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto mt-3">
            <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
            {courses.map((course, index) => (
              <ContinueLearningCard key={index} {...course} />
            ))}
          </div>
      </section>

      </div>
      {/* <VideoPage /> */}
    </section>
  );
};

export default Account;
