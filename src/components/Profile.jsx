import { IoPersonOutline } from "react-icons/io5";
import { useContext } from "react";
import { PostContext } from "../store/Context";

export default function Profile() {
  const { darkMode } = useContext(PostContext);

  return (
    <div
      className={`flex-col  p-10  w-fit h-fit space-y-[2.45rem]  rounded-xl max-sm:hidden max-md:hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } transition-all duration-300`}
    >
      <p className="font-bold text-2xl">Profile</p>
      <div className="flex space-x-4 ">
        <div className=" flex items-center ">
          <IoPersonOutline className="size-7" />
        </div>
        <div>
          <p className="font-semibold text-xl">Anshul Singh</p>
          <p
            className={`text-blue-500 ${
              darkMode ? "bg-gray-900 text-blue-300" : "bg-white text-black"
            } transition-all duration-300`}
          >
            @anshul.singh000
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <div>
          <p className="font-semibold">Post</p>
          <p>50</p>
        </div>
        <div>
          <p className="font-semibold">Followers</p>
          <p>400</p>
        </div>
        <div>
          <p className="font-semibold">Following</p>
          <p>300</p>
        </div>
      </div>
    </div>
  );
}
