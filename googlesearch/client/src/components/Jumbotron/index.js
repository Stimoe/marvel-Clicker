import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>React Books</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://books.google.com/">
        Powered by Google Books
      </a>
    </div>
  );
}

export default Jumbotron;
