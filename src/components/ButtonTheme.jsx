/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import "./ButtonTheme.css";

export function ButtonTheme({ setTheme, theme }) {
    let pathMoon = "src/assets/icon-moon.svg";
    let pathSun = "src/assets/icon-sun.svg";
  
    return (
        <button
          className="button-theme"
          onClick={() => {
            setTheme(!theme);
          }}
        >
          <span className="button-text"  > {theme ? "Dark" : "Light"}</span>
          <img
            src={theme ? pathMoon : pathSun}
            alt="Image of theme"
            className="button-image"
          />
        </button>
    );
  }
