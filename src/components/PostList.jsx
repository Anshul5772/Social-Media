import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { PostContext } from "../store/Context";
import { FaRegComment } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

export default function PostList() {
  const { darkMode } = useContext(PostContext);
  const { posts, deletePost } = useContext(PostContext);

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <div
          key={index}
          className={`w-[40rem] flex-col  p-5  h-fit space-y-5 rounded-xl  max-sm:w-[25rem] ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black "
          } transition-all duration-300`}
        >
          <p className="font-light text-lg break-words">{post}</p>
          <div className="flex justify-between">
            <div className="flex space-x-5">
              <div
                className={`cursor-pointer rounded-lg flex justify-center items-center w-[2rem] ${
                  darkMode
                    ? "bg-gray-900 text-white hover:bg-blue-300 hover:text-black"
                    : "bg-white text-black hover:bg-neutral-200"
                } transition-all duration-300`}
              >
                <FaRegHeart className="size-5" />
              </div>
              <div
                className={`cursor-pointer  rounded-lg  flex items-center justify-center w-[2rem] ${
                  darkMode
                    ? "bg-gray-900 text-white hover:bg-blue-300 hover:text-black"
                    : "bg-white text-black hover:bg-neutral-200"
                } transition-all duration-300`}
              >
                <TbMessageCircle className="size-6" />
              </div>
              <div
                className={`cursor-pointer  rounded-lg flex items-center justify-center w-[2rem] ${
                  darkMode
                    ? "bg-gray-900 text-white hover:bg-blue-300 hover:text-black"
                    : "bg-white text-black hover:bg-neutral-200"
                } transition-all duration-300`}
              >
                <LuSend className="size-5" />
              </div>
            </div>
            <div
              className={`flex cursor-pointer  rounded-lg w-[2rem] justify-center items-center ${
                darkMode
                  ? "bg-gray-900 text-white hover:bg-blue-300 hover:text-black"
                  : "bg-white text-black hover:bg-neutral-200"
              } transition-all duration-300`}
              onClick={() => deletePost(index)}
            >
              <AiOutlineDelete className="size-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
