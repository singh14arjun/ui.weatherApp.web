// SearchBar.js
import React, { useState } from "react";
import "./weather.css";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search City"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchBar;
