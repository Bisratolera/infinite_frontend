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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Side = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const toggleSidebar = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

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
    localStorage.removeItem("token");
    localStorage.removeItem("providerId");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem('role');
    navigate('/');
    window.location.reload();
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

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
      console.log("*".repeat(100));
      // console.log(response);
      console.log(response);
      console.log("*".repeat(100));
      console.log(response.data);

      setPrividerProfile(response.data.userProfileData);
    } catch (err) {
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
        className={`fixed top-0 left-0  z-50 h-screen w-64 bg-gray-50 dark:bg-gray-800 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:static`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4">
          <a href="/" className="flex items-start space-x-3 ml-16 text-xl mb-10 font-bold">
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
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl dark:text-white">Earnings</span>
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center font-bold p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <GrTransaction className="text-2xl text-[#696C73]" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl dark:text-white">Transactions</span>
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center font-bold gap-3 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiFillBook className="text-2xl text-[#696C73]" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl dark:text-white">Packages</span>
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center font-bold p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CgProfile className="text-2xl text-[#696C73]" />
                <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl dark:text-white">Profile</span>
                 </a>
                  </li>
                   <li className="w-full">
                     <a href="#" className="flex items-center font-bold gap-3 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" > 
                      <CiSettings className="text-2xl text-[#696C73]" /> 
                      <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl dark:text-white">Settings</span>
                       </a> 
                       </li>
                        <li className="w-full">
                         <a href="#" className="flex items-center font-bold p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" > 
                        <CiLogout className="text-2xl text-[#696C73]" /> 
                       <span className="flex-1 ml-3 whitespace-nowrap text-[#696C73] text-xl dark:text-white">Log out</span> 
                      </a>
                    </li> 
                   </ul>
                 </div> 
          </aside>
                {showLogoutConfirm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-900 dark:text-gray-200 mb-4">Are you sure you want to log out?</p>
                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 mr-2"
                    onClick={confirmLogout}
                  >
                    Yes
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
                    onClick={cancelLogout}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
  )}
</>
); };

export default Side;
