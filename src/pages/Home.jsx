import { useContext } from "react";
import { PostContext } from "../store/Context";
import Connections from "../components/Connections";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import Profile from "../components/Profile";
import Trending from "../components/Trending";

export default function Home() {
  const { darkMode } = useContext(PostContext);
  return (
    <div
      className={` max-w-full min-h-screen p-10 flex justify-evenly  ${
        darkMode ? "bg-gray-700 text-white" : "bg-neutral-100 text-black"
      } transition-all duration-300`}
    >
      <div className="col-1 space-y-4">
        <Profile></Profile>
        <Connections></Connections>
      </div>
      <div className="col-2 space-y-4">
        <CreatePost></CreatePost>
        <PostList></PostList>
      </div>
      <div className="col-3">
        <Trending></Trending>
      </div>
    </div>
  );
}
