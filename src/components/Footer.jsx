import { useContext } from "react";
import { PostContext } from "../store/Context";

function Footer() {
  const { darkMode } = useContext(PostContext);
  return (
    <div
      className={` mx-auto sm:px-6 lg:px-8 py-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } transition-all duration-300`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-500">
            &copy; 2024 LinkUp. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            About
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
