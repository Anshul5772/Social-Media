import { IoPersonOutline } from "react-icons/io5";
import { useContext } from "react";
import { PostContext } from "../store/Context";

export default function Connections() {
  const { darkMode } = useContext(PostContext);
  return (
    <div
      className={`flex-col  p-7 pr-20 w-fit h-fit  space-y-6  rounded-xl max-sm:hidden max-md:hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black "
      } transition-all duration-300`}
    >
      <p className="font-bold text-2xl">Connections</p>
      <div className="f1 flex space-x-3">
        <IoPersonOutline className="size-7" />
        <p className="font-semibold">Yuvraj Mehta</p>
      </div>
      <div className="f1 flex space-x-3">
        <IoPersonOutline className="size-7" />
        <p className="font-semibold">Raghav Gupta</p>
      </div>
      <div className="f1 flex space-x-3">
        <IoPersonOutline className="size-7" />
        <p className="font-semibold">Vibhanshu Pandey</p>
      </div>
      <div className="f1 flex space-x-3">
        <IoPersonOutline className="size-7" />
        <p className="font-semibold">Shubham Verma</p>
      </div>
      <div className="f1 flex space-x-3">
        <IoPersonOutline className="size-7" />
        <p className="font-semibold">Divyam</p>
      </div>
    </div>
  );
}
