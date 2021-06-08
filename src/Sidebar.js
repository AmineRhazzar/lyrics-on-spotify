import React, { useState, useEffect } from "react";
import NavHome from "./NavHome";
import NavSearch from "./NavSearch";
import Playlists from "./Playlists";

const Sidear = (props) => {
  const [userPlaylists, setUserPlaylists] = useState(undefined);

    console.log(userPlaylists);

  useEffect(() => {
    if (props.userId !== "") {
      fetch(
        "https://api.spotify.com/v1/users/" +
          props.userId +
          "/playlists?limit=20",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + props.accessToken,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((resJson) => {
          return resJson.items;
        })
        .then((playlists) => {
          setUserPlaylists(playlists);
        })
        .catch((err) => {});
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="logo">LOGO</div>
      <NavHome />
      <NavSearch />
      <Playlists userPlaylists={userPlaylists} />
    </div>
  );
};

export default Sidear;
