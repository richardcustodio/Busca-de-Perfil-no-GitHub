import React, { useState, useCallback } from "react";

function SearchBar({ onSearch }) {
  if (typeof onSearch !== "function") {
    console.error("Prop 'onSearch' inválida: esperava uma função.");
  }

  const [searchText, setSearchText] = useState("");

  const handleInputChange = useCallback((event) => {
    setSearchText(event.target.value);
  }, []);

  const handleSearchClick = useCallback(() => {
    if (searchText.trim()) {
      onSearch(searchText);
    }
  }, [onSearch, searchText]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Digite um usuário do Github"
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick} aria-label="Buscar usuário">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
}

export default React.memo(SearchBar);
