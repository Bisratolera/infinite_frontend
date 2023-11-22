import React from "react";
import { Card } from "flowbite-react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className="  font-kanit">
      <div className="flex flex-col gap-16 border bg-[#fff] mx-10 border-black justify-center items-center m-8 h-[250px] rounded-t-3xl rounded-r-0  rounded-b-0 -mb-2">
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
      </div>
    </div>
  );
};
