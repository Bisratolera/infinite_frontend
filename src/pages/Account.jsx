import React from "react";
import VideoPage from "./VideoPage";
import { Side } from "../components/Side";
import { Button, Card, TextInput } from "flowbite-react";
import { FaSearch, FaRegBell } from "react-icons/fa";

const Account = () => {
  return (
    <div>
      <div className="flex flex-row  gap-2 dark:bg-gray-950 dark:text-white transition-colors ">
        <div className="">
          <Side />
        </div>
        <div className="flex  flex-col gap-2 pl-40">
          <div className=" ">
            <Card className="flex flex-row gap-5 items-center relative ">
              <div className="flex flex-row gap-3">
                <form className="flex flex-row gap-2 dark:text-white ">
                  <TextInput
                    id="email1"
                    type="text"
                    placeholder="insert item"
                    required
                    className="w-[400px]"
                  />
                  <Button
                    className="flex flex-row gap-4 w-[56px] h-[35px]"
                    size="sm"
                    pill
                    color="dark"
                  >
                    <FaSearch />
                  </Button>
                </form>
                <div className=" items-end">
                  <Button pill color="dark" size="sm">
                    <FaRegBell /> Notfications
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold dark:text-white">Course Overview</h2>
            <div className="flex flex-row gap-3 m-3">
          <Card
            className=" w-[250px] h-[300px] rounded-3xl font-kanit shadow-md shadow-gray-600 dark:shadow-cyan-500"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite-react.com/images/blog/image-1.jpg"
            href="/courses"
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Data Analyst
            </h5>
           
            <div className="flex flex-col gap-1 items-center ">
              <div className="flex flex-row gap-4">
                <Button
                  size="xs"
                  color="dark"
                  href="/courses"
                  className="flex flex-row gap-5"
                >
                  
                </Button>
                
              </div>
            </div>
          </Card>
        </div>
          </div>
        </div>
      </div>
      {/* <VideoPage /> */}
    </div>
  );
};

export default Account;
