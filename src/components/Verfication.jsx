import React, { useRef, useState } from "react";
import lottieJson from "../assets/animations/verify.json";
import Lottie from "react-lottie-player";
import { Button, Card, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../utils/utils";
const Verification = () => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    const otpValues = inputRefs.current.map((input) => input.value).join("");
    setOtp(otpValues);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast
      .promise(axios.post(`${BASE_URL}/user/verify`, { otp }), {
        loading: "Verifying Your account...",
        success: "OTP verified successfully!",
        error: "Invalid or expired OTP",
      })
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center">
        <Card className="flex flex-col items-center w-auto h-auto">
          <Lottie
            animationData={lottieJson}
            play
            className="w-[300px] h-[200px]"
          />
          <p className="font-semibold flex items-center">
            Insert the 6 digit code here
          </p>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-row gap-3">
              {[...Array(6)].map((_, index) => (
                <TextInput
                  key={index}
                  className="w-[40px] h-[40px] text-center"
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
            <Button color="dark" type="submit">
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Verification;
