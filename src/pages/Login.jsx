import React, { useState,useEffect } from "react";
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
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
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
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    // This is where you'd handle the password reset logic
    // e.g., call an API to verify the code and reset the password
    // For now, we'll just simulate this
    toast.success("Password has been reset!");
    setForgotPassword(false);
    setEmailSent(false);
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


  return (
    <>
      <Toaster />
      <div className="flex flex-row gap-40 mt-12 ml-8 dark-duration justify-center transition-colors dark:bg-gray-950">
        <Lottie
          animationData={lottieJson}
          play
          style={{ width: "100%", maxWidth: "400px", height: "auto" }}
        />
        <div className="flex justify-center">
          <Card className="object-cover rounded-3xl shadow-lg w-[500px] h-[600px] mr-4 dark:shadow-cyan-500 shadow-gray-500">
          {!forgotPassword ? (
            <form onSubmit={handleSubmit} className="">
              <div className="w-[120px] h-[120px] rounded-full border-2  border-black bg-white flex  items-center relative overflow-hidden ">
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
                  className="border-black rounded-3xl dark:bg-gray-700 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
                />
                <Label value="Password" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-black rounded-3xl dark:bg-gray-700 dark:text-white shadow-lg hover:dark:shadow-cyan-500 duration-200"
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
              <p className="mt-4 text-center text-gray-500 text-md dark:text-[#ffffff]">
                Forgot your password?{" "}
                <button
                  type="button"
                  onClick={() => setForgotPassword(true)}
                  className="hover:underline text-black dark:text-[#ffffff] font-medium"
                >
                  Reset it
                </button>
              </p>
            </form>
            ) : !emailSent ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Handle sending verification email
                  setEmailSent(true);
                  toast.success("Verification email sent!");
                }}
                className="flex flex-col py-3 px-6 w-full"
              >
                <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
                <div className="flex flex-col w-full">
                  <Label className="text-md pb-1 font-semibold" value="Email" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-md border border-gray-300 bg-gray-100 h-12 dark:bg-gray-600 dark:text-white px-3"
                  />
                </div>
                <div className="mt-6">
                  <Button type="submit" className="w-full">
                    Send Verification Email
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={handlePasswordReset} className="flex flex-col py-3 px-6 w-full">
                <h2 className="text-2xl font-semibold mb-4">Enter Verification Code</h2>
                <div className="flex flex-col w-full">
                  <Label className="text-md pb-1 font-semibold" value="Verification Code" />
                  <input
                    type="text"
                    name="verificationCode"
                    placeholder="Enter the code sent to your email"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                    className="rounded-md border border-gray-300 bg-gray-100 h-12 dark:bg-gray-600 dark:text-white px-3"
                  />
                </div>
                <div className="flex flex-col w-full mt-4">
                  <Label className="text-md pb-1 font-semibold" value="New Password" />
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="rounded-md border border-gray-300 bg-gray-100 h-12 dark:bg-gray-700 dark:text-white px-3"
                  />
                </div>
                <div className="mt-6">
                  <Button type="submit" className="w-full">
                    Reset Password
                  </Button>
                </div>
              </form>
            )}
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
