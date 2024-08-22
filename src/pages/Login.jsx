import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Lottie from "react-lottie-player";
import { Card, Label, Button } from "flowbite-react";
import lottieJson from "../assets/animations/signup_animation.json";
import axios from "axios";
import { BASE_URL } from "../utils/utils";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = new useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.promise(
      axios.post(`${BASE_URL}/user/login`, { email, password }), // Adjust the URL based on your setup
      {
        loading: "Logging in...",
        success: (response) => {
          if (response.status === 200) {
            navigate("/account");
            return "User logged in successfully!";
          }
        },
        error: (error) => {
          if (error.response.status === 403) {
            return "Please enter all the required fields!";
          } else if (error.response.status === 404) {
            return "User not found!";
          } else if (error.response.status === 401) {
            return "Invalid credentials!";
          } else {
            return "Internal server error!";
          }
        },
      }
    );
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-row gap-40 mt-12 ml-8 dark-duration justify-center transition-colors">
        <Lottie
          animationData={lottieJson}
          play
          style={{ width: "100%", maxWidth: "400px", height: "auto" }}
        />
        <div className="flex justify-center">
          <Card className="object-cover rounded-3xl shadow-lg w-[500px] h-[600px] mr-4 dark:shadow-cyan-500 shadow-gray-500">
            <form onSubmit={handleSubmit}>
              <div className="w-[120px] h-[120px] rounded-full border-2 border-black bg-white flex  items-center relative overflow-hidden ">
                <img
                  src="/ppc.jpg"
                  alt="ppc"
                  className="object-cover absolute inset-0 m-auto"
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label value="Email" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-black rounded-3xl dark:bg-gray-900 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
                />
                <Label value="Password" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-black rounded-3xl dark:bg-gray-900 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-[63px] justify-center">
                <Button pill size="md" color="dark" type="submit">
                  Login
                </Button>
                <Button pill size="md" color="light" type="button">
                  Cancel
                </Button>
              </div>
              <p className="mt-4 flex justify-center">
                Don't have an account?{" "}
                <a href="/register">
                  <u>Signup</u>
                </a>
              </p>
            </form>
            <div className="flex items-center justify-center flex-col gap-2">
              or
              <Button
                pill
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
    </>
  );
};

export default Login;
