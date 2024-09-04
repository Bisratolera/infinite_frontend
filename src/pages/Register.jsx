import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Label, Button } from "flowbite-react";
import lottieJson from "../assets/animations/signup_animation.json";
import Lottie from "react-lottie-player";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { BASE_URL } from "../utils/utils";
import { toast, Toaster } from "react-hot-toast";

const Register = () => {
  const navigate = new useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    username: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: null,
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormData({ ...formData, profilePic: selectedFile });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const data = new FormData();
    data.append("fname", formData.fname);
    data.append("lname", formData.lname);
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("gender", formData.gender);
    data.append("password", formData.password);
    data.append("profilePic", formData.profilePic);

    try {
      await toast.promise(
        axios.post(`${BASE_URL}/user/signup`, data, {
          headers: {
            "Content-Type": "multipart/formdata",
          },
        }),
        {
          loading: "Signing up...",
          success: (response) => {
            navigate("/verify");
            return "Signup successful! Check your email to verify your account.";
          },

          error: (err) => {
            const status = err.response?.status;
            if (status === 403) {
              return "Enter all the required fields";
            } else if (status === 409) {
              return "Email is already registered, use another email";
            } else if (status === 500) {
              return "Network or server error occurred, please try again later!";
            } else {
              return "Unknown error occurred, please try again later!";
            }
          },
        }
      );
    } catch (error) {
      console.error("Error in signup: ", error);
    }
  };
  const [theme, setTheme] = useState("Light");

  // Initialize dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Save dark mode preference to localStorage
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    // Use Tailwind dark mode utility classes on the body element
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (theme === "") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <>
      <Toaster />
      <div className="font-kanit transition-colors w-full flex justify-center">
        <div className="flex flex-col md:flex-row gap-16 mt-12 mx-auto max-w-screen-lg ">
          <Card className="object-cover rounded-3xl shadow-lg dark:shadow-cyan-500 w-full md:w-auto h-auto mr-4 shadow-gray-500/50">
            <form
              className="flex flex-col justify-center items-center py-3 px-6"
              onSubmit={handleSubmit}
            >
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
                  onClick={() => document.getElementById("fileInput").click()}
                ></div>
              </div>

              <Label value="Photo (optional)" className="justify-center" />
              <div className=" grid-cols-1 md:grid-cols-2 gap-11 w-full">
                <div className=" lg:flex-row flex flex-row gap-5 md:flex-col">
                  <div className="flex flex-col gap-1">
                    <Label value="First Name" />
                    <input
                      type="text"
                      name="fname"
                      value={formData.fname}
                      onChange={handleInputChange}
                      className="border-black rounded-3xl h-[35px] dark:bg-gray-700 shadow-lg dark:text-white  hover:dark:shadow-cyan-500 duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label value="Last Name" />
                    <input
                      type="text"
                      name="lname"
                      value={formData.lname}
                      onChange={handleInputChange}
                      className="border-black rounded-3xl h-[35px] dark:bg-gray-700 shadow-lg dark:text-white hover:dark:shadow-cyan-500 duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <Label value="Username" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="border-black rounded-3xl h-[35px] dark:bg-gray-700 dark:text-white shadow-lg  hover:dark:shadow-cyan-500 duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label value="Email" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-black rounded-3xl h-[35px] dark:bg-gray-700 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label value="Gender" />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="border-black rounded-3xl h-[35px] dark:bg-gray-700 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <Label value="Password" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="border-black rounded-3xl h-[35px] dark:bg-gray-700 dark:text-white shadow-lg  hover:dark:shadow-cyan-500 duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1 ">
                  <Label value="Confirm Password" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="border-black rounded-3xl h-[35px] dark:bg-gray-700 dark:text-white shadow-lg  hover:dark:shadow-cyan-500 duration-200"
                  />
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="checkbox"
                  className="mr-2 "
                  id="termsCheckbox dark:bg-gray-700 dark:text-white shadow-lg "
                  required
                />
                <label htmlFor="termsCheckbox">
                  By creating an account, I agree to the{" "}
                  <a href="#">Terms of Use</a> and{" "}
                  <a href="#">Privacy Policy</a>.
                </label>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-[63px] justify-center">
                <Button pill="true" size="md" color="dark" type="submit">
                  Sign Up
                </Button>
                <Button  onClick={handleGoBack} pill="true" size="md" color="light">
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
    </>
  );
};

export default Register;
