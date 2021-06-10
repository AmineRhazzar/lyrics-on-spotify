import React from "react";
import LyricsContainer from "./LyricsContainer";
import { getAverageRGB } from "./utils";


const Facade = (props) => {
    const changeBG = () => {
        try {
          var rgb = getAverageRGB(document.querySelector(".song-cover"));
          console.log(rgb);
            document.querySelector(
              ".facade"
            ).style.backgroundImage = `linear-gradient(rgb(${rgb.r}, ${rgb.g}, ${rgb.b}), rgb(24,24,24))`;
        }catch(e){}
     };

  return (
      <div className="facade">
          <LyricsContainer accessToken={props.accessToken} changeBG={ changeBG}/>
    </div>
  );
};

export default Facade;
