/* eslint-disable no-unused-vars */

import React, { Component, useState } from "react";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserInfo } from "./components/UserInfo";

function App() {
  let [theme, setTheme] = useState(true);
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);

  let style = {
    "--bg": theme ? "#f6f8ff" : "#141D2F",
    "--bg-content": theme ? "#fefefe" : "#1E2A47",
    "--text": theme ? "#4b6a9b" : "#ffffff",
    "--text-alt": theme ? "#2b3442" : "#ffffff",
    "--shadow": theme
      ? "0px 16px 30px -10px rgba(70, 96, 187, 0.2)"
      : "rgba(70,88,109,0.15)",
    "--shadow-inactive": "0px 16px 30px -10px rgba(0, 0, 0, 0.2)",
    "--icon-bg": theme ? "brightness(100%)" : "brightness(1000%)",
  };

  let dataNotFound = {
    avatar_url: "https://dummyimage.com/600x400/000/fff",
    login: "notFound",
    created_at: null,
    name: "Not Found",
    public_repos: "-",
    followers: "-",
    following: "-",
    location: null,
    blog: "",
    twitter_username: null,
    company: null,
  };

  data = data ?? dataNotFound;

  if (error != null) {
    if (error.err) data = dataNotFound;
  }

  return (
    <>
      <main className="main" style={style}>
        <article className="main_container">
          <Header setTheme={setTheme} theme={theme}></Header>
          <section className="content">
            <Search setData={setData} setError={setError}></Search>
            <UserInfo theme={theme} data={data} style={style}></UserInfo>
          </section>
        </article>
      </main>
    </>
  );
}

export default App;
