import { useContext, useState } from "react";
import { PostContext } from "../store/Context";

export default function CreatePost() {
  const { darkMode } = useContext(PostContext);
  const { addPost } = useContext(PostContext);

  const [newPost, setNewPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() !== "") {
      addPost(newPost);
      setNewPost("");
    }
  };

  return (
    <div
      className={`flex-col  p-8  h-fit space-y-9 rounded-xl w-[40rem] max-sm:w-[25rem] ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } transition-all duration-300`}
    >
      <p className="text-2xl font-bold">Create a Post</p>
      <form onSubmit={handleSubmit}>
        <div className="h-[5.1rem]">
          <textarea
            value={newPost}
            placeholder="What's on your mind?"
            className={`w-full rounded-lg h-full p-2 ${
              darkMode ? "bg-gray-800 text-white" : "bg-neutral-100 text-black"
            } transition-all duration-300 resize-none`}
            onChange={(e) => {
              setNewPost(e.target.value);
            }}
          ></textarea>
        </div>
        <button
          className="cursor-pointer flex text-white bg-black p-2 w-[6rem] rounded-lg justify-center font-semibold mt-9"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
}
