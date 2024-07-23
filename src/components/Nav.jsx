import React, { useState, useEffect } from "react";
import "../index.css";
import { Button, Navbar } from "flowbite-react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

export const Nav = ({ isDarkMode, toggleDarkMode }) => {
  const [full, setFull] = useState(true);
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

  const extend = () => {
    setFull(!full);
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "Light" : "dark");
  };

  useEffect(() => {
    setTimeout(() => setFull(!full), 2000);
  }, []);

  const navStyle = {
    width: full ? "90%" : "0%",
  };

  const linkStyle = {
    opacity: full ? "1" : "0",
    transition: full ? "2s" : "0.6s",
    visibility: full ? "visible" : "hidden",
  };
  ("use client");
  return (
    <div className="sticky top-0 z-10 font-kanit">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Infinite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 flex-row gap-3">
          <Button size="sm" color="dark" className="w-[110px] h-[35px]">
            Login
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>

        <button className="w-10 h-10 ml-3" onClick={toggleMode}>
          {darkMode ? (
            <IoSunny
              style={{ fontSize: "25", color: "yellow", transition: "0.9s" }}
            />
          ) : (
            <FaMoon style={{ fontSize: "25", transition: "0.9s" }} />
          )}
        </button>
      </Navbar>
    </div>
  );
};
