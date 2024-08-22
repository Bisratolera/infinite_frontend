import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export const Footer = () => {
  const currUrl = window.location.href;

  return (
    <div
      className={`font-kanit  w-full  dark:bg-gray-950 dark:text-white transition-colors ${
        currUrl.includes("confirmation") ? "absolute" : "relative"
      } bottom-0`}
    >
      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://infinite-et.com" class="flex items-center">
                <img src="" class="h-8 me-3" alt="" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Infinite Learning Platform
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline ">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://infinite-et.com/" class="hover:underline">
                Infinite Learning Platform™
              </a>
              . All Rights Reserved. made with love by the frond team
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <div className="flex flex-row gap-4">
                <FaFacebookF />
                <FaTelegramPlane />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
