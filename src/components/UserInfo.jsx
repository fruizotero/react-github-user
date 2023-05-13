/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { CardProfile } from "./CardProfile";
import { CardStats } from "./CardStats";
import { Links } from "./SectionLinks";

import "./UserInfo.css";

export function UserInfo({ data }) {
  

  return (
    <article className="profile">
      <CardProfile data={data}></CardProfile>
      <CardStats data={data}></CardStats>
      <Links data={data} ></Links>
    </article>
  );
}
