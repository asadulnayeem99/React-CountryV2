/* eslint-disable react/prop-types */
// import React from 'react';

import { useState } from "react";
const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input.toLocaleLowerCase());
  };

  return (
    <input
      onKeyUp={submitHandler}
      type="text"
      name=""
      placeholder="Search Country..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default SearchInput;
