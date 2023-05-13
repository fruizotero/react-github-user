/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import "./CardStats.css";

export function CardStats({ data }) {
  let { public_repos, followers, following } = data;

  return (
    <div className="profile_stats">
      <div className="stat_item">
        <p className="stat_title">Repos</p>
        <p className="stat_value">{public_repos}</p>
      </div>
      <div className="stat_item">
        <p className="stat_title">Followers</p>
        <p className="stat_value">{followers}</p>
      </div>
      <div className="stat_item">
        <p className="stat_title">Following</p>
        <p className="stat_value">{following}</p>
      </div>
    </div>
  );
}
