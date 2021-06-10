import React, { useEffect, useRef, useState } from "react";
import { getAverageRGB, getDataUrl } from "./utils";

const SongCover = (props) => {
  const [base64, setBase64] = useState("");
  var img = useRef(null);

  useEffect(() => {
    try {
      img.current.addEventListener("load", (e) => {
        setBase64(getDataUrl(e.target));
      });
    } catch (e) {}
  }, []);

    useEffect(() => {
        if (base64) {
            props.changeBG();
        }
    }, [base64])
    
  return (
    <>
      {base64 ? (
        <img src={base64} alt="" className="song-cover" />
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
