import React from "react";

const Lyrics = (props) => {
  return (
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
  );
};

export default Lyrics;