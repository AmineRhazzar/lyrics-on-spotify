import React, { useState, useEffect } from "react";
import NavHome from "./NavHome";
import NavSearch from "./NavSearch";
import Playlists from "./Playlists";
import { ReactComponent as Logo } from "./logo.svg";

const Sidear = (props) => {
  const [userPlaylists, setUserPlaylists] = useState(undefined);

  useEffect(() => {
    if (props.userId !== "") {
      fetch("https://api.spotify.com/v1/me/playlists", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + props.accessToken,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((resJson) => {
          return resJson.items.map((item) => item.name);
        })
        .then((playlists) => {
          setUserPlaylists(playlists);
        })
        .catch((err) => {});
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="logo">
        <Logo />
        <h1>Spot-on Lyrics</h1>
      </div>
      <NavHome />
      <NavSearch />
      <Playlists userPlaylists={userPlaylists || [""]} />
    </div>
  );
};

export default Sidear;
