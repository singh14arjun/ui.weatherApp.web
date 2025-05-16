import React, { useState } from "react";
import "./weather.css";

const SearchBar = ({ onSearch }) => {
  const [cityName, setCityName] = useState("");

  const handleClick = () => {
    if (cityName.trim()) {
      onSearch(cityName);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search City"
        name="ciytName"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button onClick={handleClick}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchBar;
