import React from "react";
import PostCreate from "./app/posts/PostCreate";
import PostList from "./app/posts/PostList";

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Post</h1>
      <PostList />
    </div>
  );
};

export default App;
