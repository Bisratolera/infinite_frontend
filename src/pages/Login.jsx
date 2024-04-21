import React from "react";
import { FcGoogle } from "react-icons/fc";
import Lottie from "react-lottie-player";
import { Card, Label, Button } from "flowbite-react";
import lottieJson from "../assets/animations/signup_animation.json";
const Login = () => {
  const handleFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  const handleSubmit = () => {};
  return (
    <div className="flex flex-row gap-40 mt-12 ml-8 dark-duration justify-center transition-colors">
      <Lottie
        animationData={lottieJson}
        play
        style={{ width: "100%,", maxWidth: "400px", height: "auto" }}
      />
      <div className="flex justify-center">
        <Card className="object-cover rounded-3xl shadow-lg w-[500px] h-[600px] mr-4 dark:shadow-cyan-500 shadow-gray-500">
          <form className=" " onSubmit={handleSubmit}>
            <div className="w-[120px] h-[120px] rounded-full border-2 border-black bg-white flex  items-center relative overflow-hidden ">
              {/* <img src="/ppc.jpg" alt="ppc" className="object-cover" /> */}
              <img
                src="/ppc.jpg"
                alt="ppc"
                className="object-cover absolute inset-0 m-auto"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label value="Email" className="" />
              <input type="email" className="border-black rounded-3xl dark:bg-gray-900 dark:text-white shadow-lg  hover:dark:shadow-cyan-500 duration-200" />
              <Label value="Password" className="" />
              <input type="password" className="border-black rounded-3xl dark:bg-gray-900 dark:text-white shadow-lg  hover:dark:shadow-cyan-500 duration-200" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-[63px] justify-center">
              <Button pill="true" size="md" color="dark">
                Login
              </Button>
              <Button pill="true" size="md" color="light">
                Cancel
              </Button>
            </div>
            <p className="mt-4 flex justify-center">
              don't you have account, create one
              <a href="/register">
                <u>Signup</u>
              </a>
            </p>
          </form>
          <div className="flex items-center justify-center flex-col gap-2">
            or
            <Button
              pill="true"
              size="md"
              color="dark"
              className="flex flex-row gap-5"
              href="#"
            >
              <FcGoogle />
              Continue With Google
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
