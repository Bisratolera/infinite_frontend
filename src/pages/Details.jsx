import { Button, Card, Rating } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import React from "react";

const Details = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white transition-colors">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-3 m-3 justify-center items-center">
          <input
            type="text"
            className="rounded-full w-[450px] dark:bg-slate-800"
            placeholder="search courses"
          />
          <Button outline pill color="dark">
            <FaSearch className="w-[20px] h-[20px]" />
          </Button>
        </div>
        <div className="flex flex-row gap-3 m-3">
          <Card
            className=" w-[300px] h-[400px] rounded-3xl font-kanit"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite-react.com/images/blog/image-1.jpg"
            href="/courses"
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
            </div>
            <div className="flex flex-col gap-1 items-center ">
              <div className="flex flex-row gap-4">
                <Button
                  size="xs"
                  color="dark"
                  href="/courses"
                  className="flex flex-row gap-5"
                >
                  Add to Cart
                  <BsCart4 />
                </Button>
                <Button
                  size="xs"
                  color="dark"
                  href="/courses"
                  className="flex flex-row gap-4"
                >
                  Buy Now
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
