import React from "react";
import NavHome from "./NavHome";
import NavSearch from "./NavSearch";
import Playlists from './Playlists';

const Sidear = (props) => {
    return (<div className="sidebar">
        <div class="logo">LOGO</div>
        <NavHome />
        <NavSearch />
        <Playlists />
    </div>);
}

export default Sidear;