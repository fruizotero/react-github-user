/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { Component, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Search.css";

// eslint-disable-next-line react/prop-types
export function Search({ setData, setError }) {
  let [search, setSearch] = useState("fruizotero");
  let [url, setUrl] = useState("https://api.github.com/users/fruizotero");

  let { data, isLoading, error } = useFetch(url);

  useEffect(() => {
    if (data != null) {
      setData(data);
    }
    
    // console.log(data);
  }, [data]);

  useEffect(()=>{
    setError(error);
  }, [error])

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnKeyUp = (e) => {
    if (e.keyCode == 13) {
      setUrl(`https://api.github.com/users/${search}`);
    }
  };

  const handleOnClick = () => {
    setUrl(`https://api.github.com/users/${search}`);
  };

  return (
    <div className="search">
      <div className="search_left">
        <div className="search_image_container">
          <img
            src="src/assets/icon-search.svg"
            alt="Icon search"
            className="search_image"
          />
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
