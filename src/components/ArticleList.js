import React from "react";
import Article from "./Article";

function ArticleList(props) {
  const { posts } = props;

  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date || "January 1, 1970"}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;