import "./App.css";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: "book1",
      bookAuthor: "John Doe ",
      bookIsbn: "999",
      bookId: uuidv4(),
    },
  ]);

  const isInputValid = () => {
    return title.trim() === "" || author.trim() === "" || isbn.trim() == "";
  };

  const clearInputs = () => {
    setTitle("");

    setIsbn("");
    setAuthor("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInputs();
    if (isInputValid()) return;
    addBooks();
  };

  const removeBook = (id) => {};

  const addBooks = () => {
    setBooks([
      ...books,
      {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
        bookId: uuidv4(),
      },
    ]);
  };

  return (
    <div className="App">
      <div className="container">
        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          isbn={isbn}
          setIsbn={setIsbn}
          currentBookId={currentBookId}
          handleSubmit={handleSubmit}
        />
        <Table books={books} />
      </div>
    </div>
  );
}

export default App;
