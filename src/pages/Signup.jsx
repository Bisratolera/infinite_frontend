import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import { FcGoogle } from "react-icons/fc";
import lottieJson from "../assets/animations/signup_animation.json";
import { auth, provider } from "../functions/config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import toast, { Toaster } from "react-hot-toast";
import { redirect } from "react-router-dom";
const Signup = () => {
  const [value, setValue] = useState("");
  const handleGoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        toast.success("Authentication successful");
        redirect("/");
      })
      .catch((error) => {
        toast.error("Authentication failed");
        console.error("Authentication failed:", error);
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  const handleFileInput = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return value ? (
    <div className="font-kanit">
      <Toaster />
      <div className="flex flex-row gap-16 mt-12 ml-8">
        <Card className="object-cover rounded-3xl shadow-lg w-[550px] h-[820px] mr-4 shadow-gray-500/50">
          <form className="flex flex-col justify-center items-center gap-3 py-3 px-6">
            <div className="w-[100px] h-[100px] rounded-full border-2 border-black bg-white flex justify-center items-center relative overflow-hidden">
              <img src="/ppc.jpg" alt="ppc" className="object-cover" />
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
            <Label value="Photo(optional)" className="justify-center" />
            <div className="grid grid-cols-2 gap-11 w-full">
              <div className="flex flex-col gap-1">
                <Label value="First Name" className="" />
                <input
                  type="text"
                  className="border-black rounded-3xl h-[35px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label value="Middle Name" className="" />
                <input
                  type="text"
                  className="border-black rounded-3xl h-[35px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Label value="Last Name" className="" />
              <input
                type="text"
                className="border-black rounded-3xl w-[220px] h-[35px]"
              />
              <Label value="Email" className="" />
              <input
                type="email"
                className="border-black rounded-3xl h-[35px]"
              />
              <Label value="Password" className="" />
              <input
                type="password"
                className="border-black rounded-3xl h-[35px]"
              />
              <Label value="Phone Number" className="" />
              <input
                type="text"
                className="border-black rounded-3xl h-[35px]"
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-1">
                  <input type="checkbox" name="" id="" />
                  <p className="">
                    By Creating account, i agree our{" "}
                    <a href="#">
                      <u>Terms of use</u>
                    </a>{" "}
                    and{" "}
                    <a href="#">
                      <u>Privacy Policy</u>
                    </a>
                  </p>
                </div>
                <div className="w-full mx-auto">
                  {/* <input type="checkbox" name="" id="" /> */}
                  {/* <p>
                    By Creating account, i am also consenting to recieve SMS
                    messages and emails, including product new feature updates,
                    events and marketing promotions
                  </p> */}

                  <Button
                    pill="true"
                    size="md"
                    color="dark"
                    className=" flex flex-row gap-8 "
                    onClick={handleGoogleAuth}
                  >
                    <FcGoogle />
                    continue with Google
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-[63px] justify-center">
              <Button pill="true" size="md" color="dark">
                Signup
              </Button>
              <Button pill="true" size="md" color="light">
                Cancel
              </Button>
            </div>
            <p className="mt-4 flex justify-center">
              do you have account, please{" "}
              <a href="#">
                <u>Login</u>
              </a>
            </p>
          </form>
        </Card>

        <div className="flex justify-center">
          <Lottie
            animationData={lottieJson}
            play
            style={{ width: "100%,", maxWidth: "300px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Signup;
