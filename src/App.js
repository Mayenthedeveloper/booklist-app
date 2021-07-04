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
    setCurrentBookId(null);
    if (isInputValid()) return;
    !currentBookId ? addBooks() : updateBook();
    addBooks();
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.bookId !== id));
  };

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

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);

    setCurrentBookId(book.bookId);
  };

  const updateBook = () => {
    setBooks(
      books.map((book) =>
        book.bookId === currentBookId
          ? { ...books, bookTitle: title, bookAuthor: author, bookIsbn: isbn }
          : book
      )
    );
  };

  const cancelEdit = () => {
    clearInputs();
    setCurrentBookId(null);
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
          cancelEdit={cancelEdit}
        />
        <Table books={books} removeBook={removeBook} editBook={editBook} />
      </div>
    </div>
  );
}

export default App;
