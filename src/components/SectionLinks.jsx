/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "./Link";
import "./SectionLinks.css";

export function Links({ data }) {
  let { location, blog, twitter_username, company } = data;

  let icons = {
    location: "src/assets/icon-location.svg",
    blog: "src/assets/icon-website.svg",
    twitter: "src/assets/icon-twitter.svg",
    company: "src/assets/icon-company.svg",
  };

  return (
    <section className="profile_links">
      <Link
        image={icons["location"]}
        textLink={location ?? "Not Available"}
      ></Link>
      <Link
        image={icons["blog"]}
        textLink={blog ? blog : "Not Available"}
      ></Link>
      <Link
        image={icons["twitter"]}
        textLink={twitter_username ?? "Not Available"}
      ></Link>
      <Link
        image={icons["company"]}
        textLink={company ?? "Not Available"}
      ></Link>
    </section>
  );
}
