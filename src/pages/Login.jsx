import React from "react";
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
  return (
    <div className="flex flex-row gap-16 mt-12 ml-8">
      <Lottie
        animationData={lottieJson}
        play
        style={{ width: "100%,", maxWidth: "400px", height: "auto" }}
      />
      <div className="flex justify-center">
        <Card className="object-cover rounded-3xl shadow-lg w-[550px] h-[875px] mr-4 shadow-gray-500/50">
          <form className="flex flex-col justify-center items-center gap-3">
            <div className="w-[120px] h-[120px] rounded-full border-2 border-black bg-white flex justify-center items-center relative overflow-hidden">
              {/* <img src="/ppc.jpg" alt="ppc" className="object-cover" /> */}
              <h2>LOGO</h2>
            </div>

            <div className="flex flex-col gap-3">
              <Label value="Email" className="" />
              <input type="email" className="border-black rounded-3xl" />
              <Label value="Password" className="" />
              <input type="password" className="border-black rounded-3xl" />
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
              <a href="#">
                <u>Signup</u>
              </a>
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
