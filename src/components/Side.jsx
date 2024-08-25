import React, { useState, useEffect, useRef } from 'react';
import { CiMoneyBill } from 'react-icons/ci';
import { GrTransaction } from 'react-icons/gr';
import { FcPackage } from 'react-icons/fc';
import { CgProfile } from 'react-icons/cg';
import { CiLogout, CiSettings } from 'react-icons/ci';
import { IoMdNotifications } from 'react-icons/io';
import { FcBarChart } from 'react-icons/fc';
import { AiFillBook } from 'react-icons/ai';
import { TiMessageTyping } from 'react-icons/ti';
import { MdOutlineAnnouncement } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import { BASE_URL } from "../../utils/utils";
import axios from 'axios';
const Side = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false); // State for logout confirmation

  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  // Toggle the sidebar
  const toggleSidebar = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking outside
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };
  const confirmLogout = () => {
    // Clear local storage or any authentication tokens
    localStorage.removeItem("token");
    localStorage.removeItem("providerId");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem('role');

    // Redirect to home page or login page
    navigate('/');

    // Optionally, you can also refresh the page
    window.location.reload();
  };

  // Cancel logout action
  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

//fetch provider data 
  const [providerProfile, setPrividerProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
  fetchUserProfile();
}, []);
 const fetchUserProfile = async () => {
  setLoading(true);
  try {
    const token = localStorage.getItem('token');
    const providerId = localStorage.getItem('providerId');
    if (!providerId) {
      throw new Error("provider ID not found.");
    }
    // const response = await axios.get(`${BASE_URL}/provider/profile/${providerId}`, {
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //   },
    // });
    console.log("*".repeat(100))
    // console.log(response)
    console.log(response)
    console.log("*".repeat(100))
    console.log(response.data); // Add this line
    
    setPrividerProfile(response.data.userProfileData);
  } catch (err) {
    // console.log("=".repeat(100))
    // console.log(err)
    // console.log("=".repeat(100))

    setError(err.message);
  } finally {
    setLoading(false);
  }
};
  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="logo-sidebar"
        type="button"
        className="fixed z-50 p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">{isOpen ? 'Close sidebar' : 'Open sidebar'}</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        id="logo-sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-gray-50 dark:bg-gray-800 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:static sm:block`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4">
          <a href="/" className="flex items-start space-x-3 ml-16 text-xl mb-10  font-bold">
            Infinite 
          </a>

          <ul className="space-y-2 font-medium flex flex-col justify-center items-center mt-7 gap-4">
            <li className="w-full">
              <a
                href="#"
                className="flex justify-center p-2 rounded-full w-52 items-center bg-white shadow-sm gap-5 text-[#696C73] hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-[#696C73] transition duration-75 dark:text-[#696C73] group-hover:text-blue-700 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3 text-[#696C73] font-bold">Dashboard</span>
              </a>
            </li>
            <li className='w-full'>
              <a
                href="#"
                className="flex items-center font-bold p-2 text-gray-900 rounded-lg gap-3 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CiMoneyBill className="text-2xl text-[#696C73]" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl">Earnings</span>
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center font-bold p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <GrTransaction className="text-2xl text-[#696C73]" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl">Transactions</span>
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center font-bold gap-3 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiFillBook className="text-2xl text-[#696C73]" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl">Packages</span>
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center font-bold p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CgProfile className="text-2xl text-[#696C73]" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl">Customers</span>
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center font-bold p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoMdNotifications className="text-2xl text-[#696C73]" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl">Notifications</span>
              </a>
            </li>
            <li className='pb-5 border-b-2 w-full'>
              <a
                href="#"
                className="flex items-center font-bold p-2 gap-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FcBarChart className="text-2xl text-[#696C73]" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl ">Status</span>
              </a>
            </li>
            <li className='w-full'>
              <a
                href="#"
                className="flex items-center font-bold p-2 gap-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CiSettings className="text-2xl text-[#696C73]" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl">Settings</span>
              </a>
            </li>
            <li className='w-full'>
              <a
                href="#"
                className="flex items-center font-bold p-2 gap-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <TiMessageTyping className="text-2xl text-[#696C73]" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl">Message</span>
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="flex items-center font-bold p-2 gap-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdOutlineAnnouncement className="text-2xl text-[#696C73]" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl">Announcement</span>
              </a>
            </li> */}
            {/* <li className='flex cursor-pointer' onClick={handleLogout}>
              <CiLogout className="text-2xl text-red-600" />
              <span className="flex-1 ml-3 whitespace-nowrap text-red-600 text-xl">Log out</span>
            </li> */}
          </ul>
        </div>
      </aside>

      {/* Logout Confirmation Modal
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Side;
