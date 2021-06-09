import React, { useEffect } from "react";
import { ReactComponent as PlaylistIcon } from "./PlaylistIcon.svg";

const Playlists = (props) => {
  const setHeight = () => {
    const logoHeight = document.querySelector(".logo").clientHeight;
    const homeHeight = document.querySelector(".nav-home").clientHeight;
    const searchHeight = document.querySelector(".nav-search").clientHeight;
    console.log(logoHeight);
    document
      .querySelector(".playlist-cont")
      .style.setProperty(
        "height",
        `calc(100% - ${logoHeight}px - ${homeHeight}px - ${searchHeight}px - .65rem)`
      );
  };

  useEffect(() => {
    window.addEventListener("load",setHeight);
    window.addEventListener("resize", setHeight);

    return () => {
      document.removeEventListener("load", setHeight);
      document.removeEventListener("resize", setHeight);
    };
  }, []);

  return (
    <div className="playlist-cont">
      <div className="nav-playlist">
        <PlaylistIcon />
        <p>Playlists</p>
      </div>
      <div className="playlists">
        {props.userPlaylists.map((userPlaylist, i) => {
          return <p key={i}>{userPlaylist}</p>;
        })}
      </div>
    </div>
  );
};

export default Playlists;
