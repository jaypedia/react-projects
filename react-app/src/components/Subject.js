import React from 'react';

function Subject({ title, sub, onChangePage }) {
  return (
    <header>
      <h1>
        <a href="/" onClick={onChangePage}>
          {title}
        </a>
      </h1>
      <p>{sub}</p>
    </header>
  );
}

export default Subject;
