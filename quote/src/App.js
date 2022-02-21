import './App.css';
import React, { useState, useEffect } from "react";

const url = "https://api.quotable.io/random";

const App = () => {
  const [quotes, setQuotes] = useState([]);


  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const { content, author } = quotes;

  return (
    <div>
      <h1>Random quote</h1>
        <p>"{content}"</p>
        <h5>- {author} -</h5>
    </div>
  );
};

export default App;
