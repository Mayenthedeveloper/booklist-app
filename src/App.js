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
        />
        <Table books={books} />
      </div>
    </div>
  );
}

export default App;
