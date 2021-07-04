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
    handleSubmit,
    cancelEdit,
  } = props;

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        autoFocus
        required
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        value={author}
        required
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="isbn">ISBN</label>
      <input
        type="text"
        value={isbn}
        required
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button tabIndex="0" type="submit">
        {currentBookId !== null ? "Update" : "Add"}
      </button>
      {currentBookId !== null && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
}

export default Form;
