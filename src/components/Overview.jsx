import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const cardData = [
  {
    title: "Data Analyst",
    rating: "★★★★★",
    level: "Intermediate",
    videoSrc: "programing1.mp4",
  },
  {
    title: "Web Developer",
    rating: "★★★★★",
    level: "Beginner",
    videoSrc: "programing1.mp4",
  },
  {
    title: "Machine Learning",
    rating: "★★★★☆",
    level: "Advanced",
    videoSrc: "programing1.mp4",
  },
  {
    title: "Machine Learning",
    rating: "★★★★☆",
    level: "Advanced",
    videoSrc: "programing1.mp4",
  },
  {
    title: "Machine Learning",
    rating: "★★★★☆",
    level: "Advanced",
    videoSrc: "programing1.mp4",
  },
  // Add more cards as needed
];

export const Overview = () => {
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
    slidesToShow: 5,
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
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
        },
      },
      
    ],
  };

  return (
    <div className="flex flex-col gap-3 ml-7 font-kanit dark:bg-gray-950 dark:text-white transition-colors w-full justify-center">
      <div className="flex flex-col gap-3 font-kanit dark:bg-gray-950 dark:text-white transition-colors">
        <h5
          style={{ textTransform: "uppercase" }}
          className="ml-3 dark:text-white"
        >
          Top Rated
        </h5>
        <Slider {...sliderSettings} ref={sliderRef} className="flex gap-5">
          {cardData.map((card, index) => (
            <div key={index} className="flex flex-row gap-3 m-3">
              <div
                className="w-[350px] h-auto rounded-3xl font-kanit border shadow-md overflow-hidden"
                href="/courses"
              >
                <video
                  className="w-full h-52 object-cover"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                  muted
                  playsInline
                >
                  <source src={card.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                  <div className="flex items-center my-2">
                    <span className="text-yellow-500 mr-1">{card.rating}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {card.level}
                    </span>
                  </div>
                  <div className="flex  justify-between">
                  <a href="#" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:gray-blue-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Buy now</a>

                    <button className="text-xs font-medium text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      See more
                    </button>
                    {/* <button className="text-gray-500 dark:text-gray-400">
                      ❤️
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Overview;
