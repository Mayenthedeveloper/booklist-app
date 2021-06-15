import "./App.css";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: title,
      bookAuthor: author,
      bookIsbn: isbn,
      bookId: uuidv4(),
    },
  ]);

  return (
    <div className="App">
      <div className="container">
        <Form />
      </div>
    </div>
  );
}

export default App;
