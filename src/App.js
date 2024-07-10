import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState({ quote: '', author: '' });

  const getQuote = async () => {
    const response = await axios.get('https://api.quotable.io/random'); // Replace with your API endpoint
    setQuote(response.data);
  };

  useEffect(() => {
    getQuote(); // Fetch a quote on component mount
  }, []);

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <button onClick={getQuote}>Get Quote</button>
      {quote.quote && ( // Display quote and author only if data exists
        <div>
          <p>{quote.quote}</p>
          <span>- {quote.author}</span>
        </div>
      )}
    </div>
  );
}

export default App;
