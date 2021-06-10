import React, { useEffect, useRef, useState } from "react";
import { getDataUrl } from "./utils";

const SongCover = (props) => {
  const [base64, setBase64] = useState("");
  var img = useRef(null);
  const [once, setOnce] = useState(false);

  useEffect(() => {
    try {
      img.current.addEventListener("load", (e) => {
        if (!once) {
          setBase64(getDataUrl(e.target));
          setOnce(true);
        }
      });
    } catch (e) {}
  }, [props.cover, once]);

  useEffect(() => {
    
    if (base64 && !once) {
      props.changeBG();
    }
  }, [base64, once]);

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
