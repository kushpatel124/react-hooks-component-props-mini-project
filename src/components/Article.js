import React from "react";

function Article(props) {
  // set default value for date if not provided
  const date = props.date || "January 1, 1970";

  return (
    <article>
      <h3>{props.title}</h3>
      <small>{date}</small>
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;