import React from "react";

function Search({onSearch, searchQuery}) {
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onSearch} value={searchQuery}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
