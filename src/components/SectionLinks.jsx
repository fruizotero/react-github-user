/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "./Link";
import "./SectionLinks.css";
import iconLocation from "../assets/icon-location.svg";
import iconBlog from "../assets/icon-website.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconCompany from "../assets/icon-twitter.svg";

export function Links({ data }) {
  let { location, blog, twitter_username, company } = data;

  return (
    <section className="profile_links">
      <Link
        image={iconLocation}
        textLink={location ?? "Not Available"}
      ></Link>
      <Link
        image={iconBlog}
        textLink={blog ? blog : "Not Available"}
      ></Link>
      <Link
        image={iconTwitter}
        textLink={twitter_username ?? "Not Available"}
      ></Link>
      <Link
        image={iconCompany}
        textLink={company ?? "Not Available"}
      ></Link>
    </section>
  );
}
