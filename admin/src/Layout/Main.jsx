import React from 'react';
import { FaCalendarCheck, FaSign, FaSignOutAlt, FaUserInjured } from 'react-icons/fa';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import { MdManageHistory } from "react-icons/md";
import { CiBezier, CiSettings } from "react-icons/ci";
import rmjlogo from "../assets/rmjlogo.png"
function Main() {
  return (
    <div className="flex max-w-screen min-h-screen  mx-auto">
      {/* Sidebar */}
      <div className="bg-[#26384b] text-white max-h-full w-[18%] border-gray-800 border-2 shadow-lg">
        <div className="flex flex-col items-center justify-center text-center pt-6">
          <img 
            src={rmjlogo}
            alt="Profile"
            className="h-32 w-32 rounded-full border-8 border-gray-100"
          />
          <h3 className="font-bold my-3 text-sm">RMJAUTOS </h3>
        </div>
        <div className="my-8 flex flex-col gap-3">
          <Link to="/dashboard/home" className="border-t-2 border-gray-200 p-4 hover:text-green-800 text-xl flex items-center">
            <HiOutlineBookOpen className="mr-2" />Dashboard
          </Link>
          <Link to="/dashboard/cars" className="border-t-2 border-gray-200 p-4 hover:text-green-800 text-xl flex items-center">
            <FaCalendarCheck className="mr-2" />Cars
          </Link>
          <Link to="/dashboard/users" className="border-t-2 border-gray-200 p-4 hover:text-green-800 text-xl flex items-center">
            <FaUserInjured className="mr-2" />Users
          </Link>
          <Link to="/dashboard/successStory" className="border-t-2 border-gray-200 p-4 hover:text-green-800 text-xl flex items-center">
          <MdManageHistory  className="mr-2" />Success Story
          </Link>
          <Link to="/dashboard/options" className="border-t-2 border-gray-200 p-4 hover:text-green-800 text-xl flex items-center">
          <CiSettings  className="mr-2" />Options
          </Link>
          <Link to="/dashboard/banner" className="border-t-2 border-gray-200 p-4 hover:text-green-800 text-xl flex items-center">
          <CiBezier  className="mr-2" />Banner
          </Link>
          <Link to="/" className="border-t-2 border-gray-200 p-4 hover:text-green-800 text-xl flex items-center">
            <FaSignOutAlt className="mr-2" />Logout
          </Link>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full">
        {/* Navbar */}
        <div className="navbar bg-[#26384b] py-6 text-white">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">RMJAUTOS</a>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="User" src="https://res.cloudinary.com/drhtv8dr4/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1703968919/WhatsApp_Image_2023-12-30_at_9.14.47_PM-removebg-preview_muxuzr.png" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] text-black p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-1 shadow-2xl rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;
