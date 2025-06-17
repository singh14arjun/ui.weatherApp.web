import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [cityName, setCityName] = useState("");

  const handleClick = () => {
    if (cityName.trim()) {
      onSearch(cityName);
    }
  };

  return (
    <div className="bg-[#084983] flex flex-col sm:flex-row items-center gap-2.5 p-3 rounded-[10px] w-full mb-6">
      <input
        className="bg-[antiquewhite] text-[#100000] p-2 text-base sm:text-lg w-full rounded-[10px] focus:outline-none"
        type="text"
        placeholder="Search City"
        name="cityName"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="bg-transparent border-none cursor-pointer"
      >
        <i className="fa-solid fa-magnifying-glass bg-[antiquewhite] p-3 rounded-full text-black hover:bg-[#baa9c4]"></i>
      </button>
    </div>
  );
};

export default SearchBar;
