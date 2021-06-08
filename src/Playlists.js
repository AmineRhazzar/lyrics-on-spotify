import React from "react";
import { ReactComponent as PlaylistIcon } from "./PlaylistIcon.svg";

const Playlists = (props) => {
    return (
      <div className="playlist-cont">
        <div className="nav-playlist">
          <PlaylistIcon />
          <p>Playlists</p>
        </div>
            <div className="playlists">
                
        </div>
      </div>
    );
}

export default Playlists;