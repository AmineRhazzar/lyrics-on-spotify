import React, { useEffect, useState } from "react";

const Main = (props) => {
    const [lyrics, setLyrics] = useState("");
    const [refreshTimeout, setRefreshTimeout] = useState(0);

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
        return {
          song: resJson.item.name,
          artist: resJson.item.artists[0].name,
        };
      })
      .then((songInfo) => {
        fetch("http://localhost:8888/get-lyrics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(songInfo),
        })
          .then((res) => res.text())
          .then((resText) => {
            setLyrics(resText);
          });
      });

      setTimeout(() => {
          setRefreshTimeout(0)
      }, refreshTimeout);

  }, [props.accessToken, lyrics, refreshTimeout]);

  return (
    <p>
      {lyrics.split("\n").map((line) => {
        return (
          <>
            {line}
            <br />
          </>
        );
      })}
    </p>
  );
};

export default Main;
