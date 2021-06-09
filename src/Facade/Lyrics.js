import React from "react";

const Lyrics = (props) => {
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
