import React, { useEffect, useState } from "react";
import LyricsContainer from "./LyricsContainer";


const Facade = (props) => {

    const changeBG = () => { };

  return (
    <div className="facade">
          <LyricsContainer accessToken={props.accessToken} changeBG={ changeBG}/>
    </div>
  );
};

export default Facade;
