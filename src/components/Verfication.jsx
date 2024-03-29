import React from "react";
import lottieJson from "../assets/animations/verify.json";
import Lottie from "react-lottie-player";
import { Button, Card } from "flowbite-react";
export const Verfication = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Card className="flex flex-col  items-center justify-center ml-[100px] mr-[100px]">
          <div className="flex justify-center items-center">
            <Lottie
              animationData={lottieJson}
              play
              style={{ width: "100%,", maxWidth: "300px", height: "auto" }}
            />
          </div>

          <p className="font-semibold ">
            hello there john doe, please confirm your email by clicking the
            verify button
          </p>
          <Button pill color="dark" href="/confirmation">
            Verify
          </Button>
        </Card>
      </div>
    </>
  );
};
