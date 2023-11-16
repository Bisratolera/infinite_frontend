import React from "react";
import { Card } from "flowbite-react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className="bottom-0  font-kanit">
      <Card className="flex flex-col gap-16 border-black justify-center items-center m-8 h-[250px] rounded-3xl">
        <div className="flex flex-row gap-5">
          <FaSquareFacebook className="w-[50px] h-[50px] icon" />
          <FaSquareTwitter className="w-[50px] h-[50px] icon" />
          <FaGithub className="w-[50px] h-[50px] icon" />
          <FaLinkedin className="w-[50px] h-[50px] icon" />
          <FaInstagram className="w-[50px] h-[50px] icon" />
        </div>

        <div className="flex justify-center ">
          <p> ©️ copyright 2023 infinite it solutions</p>
        </div>
      </Card>
    </div>
  );
};
