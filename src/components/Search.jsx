/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import iconSearch from "../assets/icon-search.svg";
import "./Search.css";

// eslint-disable-next-line react/prop-types
export function Search({ setNameToSearch }) {
  let [search, setSearch] = useState("fruizotero");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnKeyUp = (e) => {
    if (e.keyCode == 13) {
      setNameToSearch(search);
    }
  };

  const handleOnClick = () => {
    setNameToSearch(search);
  };

  return (
    <div className="search">
      <div className="search_left">
        <div className="search_image_container">
          <img src={iconSearch} alt="Icon search" className="search_image" />
        </div>
        <div className="search_input_container">
          <input
            type="search"
            className="search_input"
            id="search"
            name="search"
            value={search}
            onChange={handleOnChange}
            onKeyUp={handleOnKeyUp}
            placeholder="Search Github username..."
          />
        </div>
      </div>
      <div className="search_right">
        <button className="search_button" onClick={handleOnClick}>
          Search
        </button>
      </div>
    </div>
  );
}
