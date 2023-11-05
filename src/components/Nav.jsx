import React from "react";
import { Button, Navbar } from "flowbite-react";
export const Nav = () => {
  return (
    <Navbar
      fluid
      className="top-0 m-4  z-20 flex sticky overflow-hidden  bg-white p-0 sm:p-2 md:p-4 lg:p-6 xl:p-8 rounded-full shadow-md justify-center h-[40px] cursor-pointer"
    >
      <Navbar.Collapse>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <img src="" alt="LOGO" />
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
