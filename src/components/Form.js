import React, { Component } from "react";

function Form(props) {
  const {
    title,
    setTitle,
    author,
    setAuthor,
    isbn,
    setIsbn,
    currentBookId,
  } = props;

  return (
    <form action="">
      <label htmlFor="title">Title</label>
      <input type="text" />
      <label htmlFor="author">Author</label>
      <input type="text" />
      <label htmlFor="isbn">ISBN</label>
      <input type="text" />
    </form>
  );
}

export default Form;
