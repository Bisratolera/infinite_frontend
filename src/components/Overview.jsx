import React,{useRef,useState} from "react";
import { Carousel } from "flowbite-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import autoprefixer from "autoprefixer";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

export const Overview = () => {
  "use client";
const sliderRef = useRef(null);

const next = () => {
  sliderRef.current.slickNext();
};

const previous = () => {
  sliderRef.current.slickPrev();
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow:6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 955,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
  return (

    <div className="flex flex-col gap-3 ml-7   font-kanit dark:bg-gray-950 dark:text-white transition-colors w-full justify-center">
      {/* <h5 style={{ textTransform: "uppercase" }} className="ml-3 dark:text-white">
        top rated
      </h5> */}
      {/* <div className="mt-4 flex">
            <button className="font-bold py-2 px-4 rounded-l" onClick={previous}>
              <FaChevronCircleLeft style={{ fontSize: "40px" }} />
            </button>
            <button className="font-bold py-2 px-4 rounded-r" onClick={next}>
              <FaChevronCircleRight style={{ fontSize: "40px" }} />
            </button>
      </div> */}
     

    <div className="flex flex-col gap-3 ml-7 max-w-full font-kanit dark:bg-gray-950 dark:text-white transition-colors">
      <h5
        style={{ textTransform: "uppercase" }}
        className="ml-3 dark:text-white"
      >
        top rated
      </h5>
      <Slider {...sliderSettings} ref={sliderRef} className="flex">
        {/*  */}
        <div className="flex flex-col dark:bg-gray-950 dark:text-white ">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-56 w-56 shadow-[#777]"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>Basics of HTML</p>
        </div>
        {/* Add more card elements as needed */}
        {/* Example additional card element */}
        <div className="flex flex-col">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-56 w-56 shadow-[#777] dark:shadow-cyan-500/50"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>BASICS OF HTML</p>
        </div>
        <div className="flex flex-col">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-56 w-56 shadow-[#777] dark:shadow-cyan-500/50"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>BASICS OF HTML</p>
        </div>
        <div className="flex flex-col dark:bg-gray-950 dark:text-white">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-56 w-56 shadow-[#777] dark:shadow-cyan-500/50"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>BASICS OF HTML</p>
        </div>
        <div className="flex flex-col">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-56 w-56 shadow-[#777] dark:shadow-cyan-500/50"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p>BASICS OF HTML</p>
        </div>
        <div className="flex flex-col">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-56  w-56 shadow-[#777] dark:shadow-cyan-500/50"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p >BASICS OF HTML</p>
        </div>
        <div className="flex flex-col">
          <img
            className="object-cover mb-6 rounded-xl shadow-lg h-56 w-56 shadow-[#777] dark:shadow-cyan-500/50"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p >BASICS OF HTML</p>
        </div>

        </Slider>
        </div>  
    </div>
  );
};

export default Overview;
