import React from "react";
import { ReactComponent as SearchIcon } from "./SearchIcon.svg";

const NavSearch = (props) => {
    return (<div className="nav-search">
        <SearchIcon />
        <p>Search</p>
    </div>)
}
export default NavSearch;