import React from "react";
import VideoPage from "./VideoPage";
import { Side } from "../components/Side";
import { Button, Card, TextInput } from "flowbite-react";
import { FaSearch, FaRegBell } from "react-icons/fa";

const Account = () => {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <div className="">
          <Side />
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <Card className="flex flex-row gap-5 items-center relative">
              <div className="flex flex-row gap-3">
                <form className="flex flex-row gap-2">
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
            <h2 className="text-xl font-bold">Course Overview</h2>
            <div className="flex flex-row gap-3 items-center relative">
              <Card className="w-auto"></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
      {/* <VideoPage /> */}
    </div>
  );
};

export default Account;
