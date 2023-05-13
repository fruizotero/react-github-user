/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./Link.css";

export function Link({image, textLink }) {
  return (
    <a className="link">
      <div className="link_image_container">
        <img src={image} alt="Icon" className="link_image" />
      </div>
      <span className="link_text">{textLink}</span>
    </a>
  );
}
