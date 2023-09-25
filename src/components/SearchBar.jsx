// import React, { ReactElement, ReactNode } from "react";
import { Input } from "@chakra-ui/react";
// import { useState, useEffect } from 'react';

const SearchBar = (props) => {
  // Filter recipe with the searchbar based on label & healthLabels,
  const { onInputChange } = props;

  return (
    <>
      <Input
        type="text"
        placeholder="Search..."
        border="1px solid #949494"
        width="40%"
        backgroundColor="white"
        borderRadius="lg"
        onChange={onInputChange}
        flex="1" // Allow the search bar to grow and shrink
        minWidth="0" // Ensure the search bar can shrink to 0 width
      />
    </>
  );
};

export default SearchBar;