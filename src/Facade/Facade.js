import React from "react";
import LyricsContainer from "./LyricsContainer";
import { getAverageRGB } from "./utils";


const Facade = (props) => {
    const changeBG = () => {
        try {
            var {r, g, b} = getAverageRGB(document.querySelector(".song-cover"));
            document.querySelector(
              ".facade"
            ).style.backgroundImage = `linear-gradient(rgb(${r}, ${g}, ${b}), rgb(0,0,0))`;
        }catch(e){}
     };

  return (
      <div className="facade">
          <LyricsContainer accessToken={props.accessToken} changeBG={ changeBG}/>
    </div>
  );
};

export default Facade;
