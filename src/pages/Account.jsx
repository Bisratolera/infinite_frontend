import React from "react";
import VideoPage from "./VideoPage";
import Side from "../components/Side";
import CourseTable from "../components/CourseTable";
import { Button, Card, TextInput } from "flowbite-react";
import { FaSearch, FaRegBell, FaWalking, FaClock } from "react-icons/fa";
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
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-4 dark:bg-gray-950 dark:text-white transition-colors">
        <div className="">
          <Side />
        </div>
        <div className="flex w-full flex-col gap-4 px-4">
          {/* Search bar */}
          <form className="w-full lg:max-w-md mx-auto">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full lg:w-[500px] p-2 mt-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Try searching programming courses"
                required
              />
            </div>
          </form>

          {/* Dashboard */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold dark:text-white">Dashboard</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <CardComponent icon={<FaWalking className="bg-blue-600 rounded-md text-2xl text-white p-1" />} title="OnGoing" count="5" />
              <CardComponent icon={<SiNike className="bg-green-500 rounded-md text-2xl text-white p-1" />} title="OnGoing" count="15" />
              <CardComponent icon={<PiCertificateFill className="bg-yellow-500 rounded-md text-2xl text-white p-1" />} title="OnGoing" count="45" />
              <CardComponent icon={<FaClock className="bg-purple-500 rounded-md text-2xl text-white p-1" />} title="OnGoing" count="25" />
            </div>
          </div>

          {/* Course Overview */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold dark:text-white">Course Overview</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <CourseOverviewCard imageUrl="pexels-shkrabaanthony-5475784.jpg" title="Create 3D Bender with Blender" category="Design" />
              <CourseOverviewCard imageUrl="pexels-shkrabaanthony-5475784.jpg" title="Create 3D Bender with Blender" category="Design" />
              <CourseOverviewCard imageUrl="pexels-shkrabaanthony-5475784.jpg" title="Create 3D Bender with Blender" category="Design" />
            </div>
          </div>

          {/* My Course */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold dark:text-white">My Course</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <CourseTable />
            </div>
          </div>
        </div>

        <section className="mt-10 flex flex-col gap-4">
          <h1 className="text-xl font-bold">Course Topic</h1>
          <div className="w-full lg:w-[350px] bg-white rounded-lg shadow p-6 relative mx-auto">
            <div className="relative flex items-center justify-center">
              <Doughnut data={data} options={options} />
              <div className="absolute flex flex-col items-center">
                <h2 className="text-3xl font-bold">42</h2>
                <p className="text-gray-500">Total Course</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <LegendItem color="bg-purple-300" label="Design (40%)" />
              <LegendItem color="bg-purple-400" label="Code (30%)" />
              <LegendItem color="bg-purple-500" label="Business (20%)" />
              <LegendItem color="bg-purple-600" label="Data (10%)" />
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
    </section>
  );
};

const CardComponent = ({ icon, title, count }) => (
  <div className="w-[170px] bg-white h-[120px] flex flex-col justify-between p-4 rounded-xl shadow-sm dark:shadow-cyan-500">
    <div className="flex items-center gap-2 text-xl">
      {icon}
      <p>{title}</p>
    </div>
    <p className="text-4xl font-medium">{count}</p>
  </div>
);

const CourseOverviewCard = ({ imageUrl, title, category }) => (
  <div className="w-[250px] h-[325px] bg-white rounded-3xl shadow-md p-2 dark:shadow-cyan-500">
    <img src={imageUrl} className="h-44 rounded-xl" alt="course" />
    <div className="mt-2">
      <p className="w-full flex justify-between text-xl">
        {category}
        <MdBookmarkAdd className="p-2 bg-gray-900 text-4xl text-white rounded-full" />
      </p>
      <h5 className="text-md font-normal tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="text-gray-400">16 lessons . 24 hours</p>
    </div>
  </div>
);

const LegendItem = ({ color, label }) => (
  <div className="flex items-center space-x-2">
    <span className={`w-3 h-3 ${color} rounded-full`} />
    <span>{label}</span>
  </div>
);

export default Account;
