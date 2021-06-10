import React, { useState, useEffect } from "react";
import Lyrics from "./Lyrics";
import SongCover from "./SongCover";

const LyricsContainer = (props) => {
  const [lyrics, setLyrics] = useState("");
  const [getNext, setGetNext] = useState(false);
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
        fetch("http://localhost:8888/get-lyrics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(songNameArtist),
        })
          .then((res) => res.text())
          .then((resText) => {
            setLyrics(resText);
          });
      })
      .catch((err) => { });
  }, [props.accessToken, lyrics, getNext]);

  return (
    <div className="lyrics-cont">
      <div className="song-info">
        <SongCover cover={songInfo.cover} changeBG={props.changeBG} />
        <div className="song-info-text">
          <h1 className="song-title">{songInfo.name}</h1>
          <p className="song-artist">
            {songInfo.artists.map((elem) => elem.name).join(", ")}
          </p>
        </div>
        <button
          onClick={() => {
            setGetNext(!getNext);
          }}
        >
          GET NEXT SONG
        </button>
      </div>

      <Lyrics lyrics={lyrics} />
    </div>
  );
};

export default LyricsContainer;
