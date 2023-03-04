import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header name="Overreacted" />
      <About image="https://via.placeholder.com/215" about="About this blog" />
      <ArticleList posts={blogData.posts} />
      {/* Other components */}
    </div>
  );
}

export default App;

