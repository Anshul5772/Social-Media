import { CiHashtag } from "react-icons/ci";
import { useContext } from "react";
import { PostContext } from "../store/Context";

export default function Trending() {
  const { darkMode } = useContext(PostContext);
  return (
    <div
      className={`flex-col  p-[2.45rem] pr-20 w-fit h-fit  space-y-4
     rounded-xl max-sm:hidden max-md:hidden ${
       darkMode ? "bg-gray-900 text-white" : "bg-white text-black "
     } transition-all duration-300`}
    >
      <p className="font-bold text-2xl">Trending</p>
      <div className="f1 flex space-x-3">
        <CiHashtag className="size-7" />
        <p className="font-semibold">TechNews</p>
      </div>
      <div className="f1 flex space-x-3">
        <CiHashtag className="size-7" />
        <p className="font-semibold">Travel</p>
      </div>
      <div className="f1 flex space-x-3">
        <CiHashtag className="size-7" />
        <p className="font-semibold">FoodieLife</p>
      </div>
      <div className="f1 flex space-x-3">
        <CiHashtag className="size-7" />
        <p className="font-semibold">FitnessMotivation</p>
      </div>
    </div>
  );
}
