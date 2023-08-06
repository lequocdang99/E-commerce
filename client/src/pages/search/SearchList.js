import React from "react";
import SearchListItem from "./SearchListItem";

const SearchList = () => {
  const searchList = require("../../data/search.json");
  return (
    <div className="searchList">
      <SearchListItem list={searchList} />
    </div>
  );
};

export default SearchList;
