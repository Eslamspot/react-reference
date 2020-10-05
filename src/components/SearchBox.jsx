import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Robot search"
        className="pa3 ba b--green bg-lightest-blue "
        type="search"
        placeholder="Robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
