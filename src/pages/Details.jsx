import { Button, Card, Rating } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import React from "react";

const Details = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-3 m-3 justify-center items-center">
          <input
            type="text"
            className="rounded-full w-[450px]"
            placeholder="search courses"
          />
          <Button outline pill color="dark">
            <FaSearch className="w-[20px] h-[20px]" />
          </Button>
        </div>
        <div className="flex flex-row gap-3 m-3">
          <Card
            className=" w-[250px] rounded-3xl font-kanit"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite-react.com/images/blog/image-1.jpg"
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Data Analyst
            </h5>
            <div className="flex flex-row gap-9">
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
              <FaRegHeart className="w-[30px] h-[30px]" />
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <div className="flex flex-row gap-4">
                <p>Intermediate</p>
                <Button size="xs" color="dark">
                  See More
                </Button>
              </div>
            </div>
          </Card>
          <Card
            className=" w-[250px] rounded-3xl font-kanit"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite-react.com/images/blog/image-1.jpg"
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Data Analyst
            </h5>
            <div className="flex flex-row gap-9">
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
              <FaRegHeart className="w-[30px] h-[30px]" />
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <div className="flex flex-row gap-4">
                <p>Intermediate</p>
                <Button size="xs" color="dark">
                  See More
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Details;
