import React, { useEffect, useRef, useState } from "react";
import { getDataUrl } from "./utils";

const SongCover = (props) => {
  const [base64, setBase64] = useState("");
  var img = useRef(null);
    
    var changeBG = props.changeBG;

  useEffect(() => {
    try {
      img.current.addEventListener("load", (e) => {
        if (!base64) {
          setBase64(getDataUrl(e.target));
        }
      });
    } catch (e) {}
  }, [props.cover, base64]);

  useEffect(() => {

    if (base64) {
      changeBG();
    }
  }, [base64, changeBG]);

  return (
    <>
      {base64 ? (
        <img
          src={base64}
          alt=""
          className="song-cover"
          crossOrigin="anonymous"
        />
      ) : (
        <img
          src={props.cover}
          alt=""
          className="song-cover"
          ref={img}
          crossOrigin="anonymous"
        />
      )}
    </>
  );
};

export default SongCover;
