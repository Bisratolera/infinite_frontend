import { Card, Label, TextInput } from "flowbite-react";
import React from "react";

const Signup = () => {
  return (
    <div className="font-kanit">
      <div className="flex flex-row gap-16 mt-12 ml-8">
        <Card className="object-cover  rounded-3xl shadow-lg w-[550px] h-[750px] mr-4  shadow-gray-500/50 ">
          <form>
            <div className="flex justify-center">
              <input type="file" name="" id="" />
            </div>
            <div className="flex flex-row gap-11">
              <div className="flex flex-col gap-1">
                <Label value="First Name" className="" />
                <input type="text" className="border-black rounded-3xl" />
              </div>

              <div className="flex flex-col gap-1">
                <Label value="Middle Name" className="" />
                <input type="text" className="border-black rounded-3xl" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label value="Last Name" className="" />
              <input
                type="text"
                className="border-black rounded-3xl w-[220px]"
              />
              <Label value="Email" className="" />
              <input type="email" className="border-black rounded-3xl" />
              <Label value="Password" className="" />
              <input type="password" className="border-black rounded-3xl" />
              <Label value="Phone Number" className="" />
              <input type="text" className="border-black rounded-3xl" />
            </div>
          </form>
        </Card>

        <div className="flex justify-center">
          <h2>lottie files goes here</h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
