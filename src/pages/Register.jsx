import React from "react";
import { Card, Label, Button } from "flowbite-react";
import lottieJson from "../assets/animations/signup_animation.json";
import Lottie from "react-lottie-player";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  const handleFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (
    <div className="font-kanit transition-colors">
      <div className="flex flex-col md:flex-row gap-16 mt-12 mx-auto max-w-screen-lg ">
        <Card className="object-cover rounded-3xl shadow-lg dark:shadow-cyan-500 w-full md:w-auto h-auto mr-4 shadow-gray-500/50">
          <form className="flex flex-col justify-center items-center py-3 px-6">
            <div className="w-[100px] h-[100px] rounded-full border-2 border-black bg-white flex justify-center items-center relative overflow-hidden">
              <img
                src="/ppc.jpg"
                alt="ppc"
                className="object-cover absolute inset-0 m-auto"
              />
              <input
                type="file"
                id="fileInput"
                className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
                onChange={handleFileChange}
              />
              <div
                className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300"
                onClick={handleFileInput}
              ></div>
            </div>

            <Label value="Photo (optional)" className="justify-center" />
            <div className=" grid-cols-1 md:grid-cols-2 gap-11 w-full">
              <div className=" lg:flex-row flex flex-row gap-5 md:flex-col">
                <div className="flex flex-col gap-1">
                  <Label value="First Name" />
                  <input
                    type="text"
                    className="border-black rounded-3xl h-[35px] dark:bg-gray-900 shadow-lg dark:text-white  hover:dark:shadow-cyan-500 duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label value="Last Name" />
                  <input
                    type="text"
                    className="border-black rounded-3xl h-[35px] dark:bg-gray-900 shadow-lg dark:text-white hover:dark:shadow-cyan-500 duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <Label value="Username" />
                <input
                  type="text"
                  className="border-black rounded-3xl h-[35px] dark:bg-gray-900 dark:text-white shadow-lg  hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label value="Email" />
                <input
                  type="email"
                  className="border-black rounded-3xl h-[35px] dark:bg-gray-900 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label value="Password" />
                <input
                  type="password"
                  className="border-black rounded-3xl h-[35px] dark:bg-gray-900 dark:text-white shadow-lg  hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <Label value="Confirm Password" />
                <input
                  type="password"
                  className="border-black rounded-3xl h-[35px] dark:bg-gray-900 dark:text-white shadow-lg  hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
            </div>
            <div className="mt-4">
              <input
                type="checkbox"
                className="mr-2 "
                id="termsCheckbox dark:bg-gray-900 dark:text-white shadow-lg "
                required
              />
              <label htmlFor="termsCheckbox">
                By creating an account, I agree to the{" "}
                <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
              </label>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-[63px] justify-center">
              <Button pill="true" size="md" color="dark" href="/verify">
                Sign Up
              </Button>
              <Button pill="true" size="md" color="light">
                Cancel
              </Button>
            </div>
            <p className="mt-4 flex justify-center">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </form>
          <div className="flex justify-center items-center flex-col gap-1">
            <h2 className="dark:text-white"> OR </h2>
            <Button pill color="dark" className="flex flex-row gap-5">
              <FcGoogle />
              Continue With Google
            </Button>
          </div>
        </Card>

        <div className="flex justify-center md:w-1/2">
          <Lottie
            animationData={lottieJson}
            play
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
