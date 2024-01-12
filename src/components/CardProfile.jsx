/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { convertDate } from "../helpers/convertDate";

import imageAvatar from "../assets/avatar.png";

import "./CardProfile.css";

// eslint-disable-next-line react/prop-types
export function CardProfile({ data }) {
  // eslint-disable-next-line react/prop-types
  let { avatar_url, login, created_at, name, bio } = data;

  return (
    <article className="card">
      <div className="card_top">
        <div className="card_left">
          <div className="card_image_container">
            <img
              src={avatar_url ?? imageAvatar}
              alt="Image of the user from github"
              className="card_image"
            />
          </div>
        </div>
        <div className="card_right">
          <div className="card_main_text">
            <h2 className="card_name">{name}</h2>
            <p className="card_alias">{`@${login}`}</p>
          </div>
          <div className="card_secondary_text">
            <p className="date_join">{`Joined ${convertDate(created_at)}`}</p>
          </div>
        </div>
      </div>
      <div className="card_bottom">
        <p className="profile_bio">
          {bio == null ? "This profile has no bio" : bio}
        </p>
      </div>
    </article>
  );
}
