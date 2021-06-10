import React, { useEffect } from "react";
import { fadeIn } from "./utils";

const Lyrics = (props) => {
  useEffect(() => {
    document.querySelector(".lyrics-wrapper").scrollTop = 0;
    
    return () => {
      document.querySelector(".lyrics-wrapper").remove();
    }

  }, []);
  
  

  return (
    <div className="lyrics-wrapper">
      <p className="lyrics">
        {props.lyrics.split("\n").map((line, i) => {
          return (
            <span key={i}>
              {line}
              <br />
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default Lyrics;
