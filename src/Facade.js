import React from "react";
import LyricsContainer from "./LyricsContainer";

const Facade = (props) => {
    
    return (<div className="facade">
        <LyricsContainer accessToken={props.accessToken }/>
    </div>);
}

export default Facade;