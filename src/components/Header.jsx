import { FiHome } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { PiSunDimLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { PostContext } from "../store/Context";

export default function  Header() {
  const { darkMode, setMode } = useContext(PostContext);
  
  return (
    <div
      className={`flex p-5 w-full justify-around   ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } transition-all duration-300`}
    >
      <Link
        to="/"
        className={`text-3xl  font-medium ${
          darkMode ? "bg-gray-900 text-blue-200" : "bg-white text-blue-500"
        } transition-all duration-300`}
      >
        LinkUp
      </Link>
      <div className="flex space-x-5">
        <Link
          to="/"
          className={`flex space-x-2 cursor-pointer   p-2 rounded-lg max-sm:hidden ${
            darkMode
              ? "bg-gray-900 text-white hover:bg-blue-300 hover:text-black"
              : "bg-white text-black hover:bg-neutral-200"
          } transition-all duration-300`}
        >
          <FiHome className="size-6" />
          <p className="font-semibold max-md:hidden">Home</p>
        </Link>
        <Link
          to="/notifications"
          className={`flex space-x-2 cursor-pointer  p-2 rounded-lg max-sm:hidden ${
            darkMode
              ? "bg-gray-900 text-white hover:bg-blue-300 hover:text-black"
              : "bg-white text-black hover:bg-neutral-200"
          } transition-all duration-300`}
        >
          <MdNotificationsNone className="size-6" />
          <p className="font-semibold max-md:hidden">Notifications</p>
        </Link>
        <Link
          to="/messages"
          className={`flex space-x-2 cursor-pointer  p-2 rounded-lg max-sm:hidden ${
            darkMode
              ? "bg-gray-900 text-white hover:bg-blue-300 hover:text-black"
              : "bg-white text-black hover:bg-neutral-200"
          } transition-all duration-300`}
        >
          <FiMessageCircle className="size-6" />
          <p className="font-semibold max-md:hidden">Messages</p>
        </Link>
      </div>
      <div className="flex space-x-5 ">
        <input
          type="text"
          placeholder="Search..."
          className={`border border-black w-60 rounded-full pl-2 placeholder:text-black max-sm:hidden max-md:hidden ${
            darkMode
              ? "bg-gray-600 text-white placeholder:text-black font-semibold"
              : "bg-white text-black font-semibold"
          } transition-all duration-300`}
        ></input>
        <div className=" hidden max-md:inline-block lg:hidden justify-center">
          <FaSearch className="size-6 " />
        </div>
        <div className=" flex items-center hover:cursor-pointer">
          <IoPersonOutline className="size-7 " />
        </div>
        <div
          className={`flex items-center hover:cursor-pointer ${
            darkMode && "hidden"
          }`}
          onClick={setMode}
        >
          <IoMoonOutline className="size-7" />
        </div>
        <div
          className={`flex items-center hover:cursor-pointer  ${
            !darkMode && "hidden"
          }`}
          onClick={setMode}
        >
          <PiSunDimLight className="size-7" />
        </div>
      </div>
    </div>
  );
}
