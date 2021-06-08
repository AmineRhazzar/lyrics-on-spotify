import React, { useState, useEffect } from "react";
import Lyrics from "./Lyrics";

const LyricsContainer = (props) => {
  const [lyrics, setLyrics] = useState("");
  const [refreshTimeout, setRefreshTimeout] = useState(0);
  const [songInfo, setSongInfo] = useState({
    name: "",
    artists: [],
    cover: "",
  });

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/player/currently-playing?market=MA", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + props.accessToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setRefreshTimeout(resJson.item["duration_ms"]);

        setSongInfo({
          name: resJson.item.name,
          artists: resJson.item.artists,
          cover: resJson.item.album.images[1].url,
        });

        return {
          song: resJson.item.name,
          artist: resJson.item.artists[0].name,
        };
      })
      .then((songNameArtist) => {
        // fetch("http://localhost:8888/get-lyrics", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(songNameArtist),
        // })
        //   .then((res) => res.text())
        //   .then((resText) => {
        //     setLyrics(resText);
        //   });
      });

    setTimeout(() => {
      setRefreshTimeout(0);
    }, refreshTimeout);
  }, [props.accessToken, lyrics, refreshTimeout]);

  return (
    <div className="lyrics-cont">
      <img src={songInfo.cover} alt="" className="song-cover" />
      <h1 className="song-title">{songInfo.name}</h1>
      <p className="song-artist">
        {songInfo.artists.map((elem) => elem.name).join()}
      </p>
      <Lyrics lyrics={lyrics} />
    </div>
  );
};

export default LyricsContainer;
