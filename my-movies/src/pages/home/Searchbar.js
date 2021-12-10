import React, { useRef } from 'react';

function Searchbar() {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  const onClick = () => {
    handleSearch();
  };

  return (
    <div>
      <div>Genre</div>
      <input
        ref={inputRef}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onClick}>
        Search
      </button>
    </div>
  );
}

export default Searchbar;
