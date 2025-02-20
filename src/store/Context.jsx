import { createContext, useState } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    "Excited to start my new job tomorrow! 💼",
  ]);
  const [darkMode, setdarkMode] = useState(false);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const deletePost = (indextoDelete) => {
    const newPosts = [...posts];
    newPosts.splice(indextoDelete, 1);
    setPosts(newPosts);
  };

  const setMode = () => {
    if (darkMode === false) {
      setdarkMode(true);
    } else {
      setdarkMode(false);
    }
  };

  return (
    <PostContext.Provider
      value={{ posts, darkMode, addPost, deletePost, setMode }}
    >
      {children}
    </PostContext.Provider>
  );
};
export { PostContext, PostProvider };
