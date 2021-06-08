import React from "react";
import { ReactComponent as HomeIcon } from "./HomeIcon.svg";

const NavHome = (props) => {
    return (<div class="nav-home">
        <HomeIcon />
        <p className="nav-link">Home</p>
    </div>)
}
export default NavHome;