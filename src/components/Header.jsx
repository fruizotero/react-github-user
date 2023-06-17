/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { ButtonTheme } from "./ButtonTheme";
import "./Header.css";

// eslint-disable-next-line react/prop-types
export function Header({ setTheme, theme }) {

  return (
    // eslint-disable-next-line react/prop-types
    <header className="header">
      <h1 className="header_title">devfinder</h1>
      <ButtonTheme
        setTheme={setTheme}
        theme={theme}
      ></ButtonTheme>
    </header>
  );
}
