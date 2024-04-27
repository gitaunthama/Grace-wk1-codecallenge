import React from "react";
import "./Search.css"

function Search({handleSearch}) {
  return (
    <div className=" fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon">
      <i class="fa-brands fa-searchengin"></i>
      </i>
    </div>
  );
}

export default Search;