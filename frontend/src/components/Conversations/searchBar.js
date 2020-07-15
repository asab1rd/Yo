import React from "react";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <input
        className="search-convos"
        type="text"
        placeholder="Search your conversations"
      />
    </div>
  );
}
