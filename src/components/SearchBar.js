import React from "react";

function SearchBar({isAlphabetChecked, isPriceChecked, sortByAlphabet, sortByPrice, handleFilter}) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort by alphabet"
          checked={isAlphabetChecked}
          onClick={() => sortByAlphabet()}
          onChange={() => {}}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort by price"
          checked={isPriceChecked}
          onClick={() => sortByPrice()}
          onChange={() => {}}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
