import React from 'react';

function Quote({ quote, author }) {
  return (
    <div>
      <p>{quote}</p>
      <span>- {author}</span>
    </div>
  );
}

export default Quote;
