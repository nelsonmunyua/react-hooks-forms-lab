import React from "react";

function Filter({
  selectedCategory,
  onCategoryChange,
  search,
  onSearchChange,
}) {
  function handleCategoryChange(event) {
    onCategoryChange(event.target.value);
  }

  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      {/* Search input */}
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      />

      {/* Category dropdown */}
      <select
        name="filter"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;