import React from "react";

function Search({searchQuery, onSearch}) {
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchQuery} onChange={onSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;