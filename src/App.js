import React, { useState, useEffect } from "react";
import Main from "./Main";
import Homepage from "./Homepage";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getHashParams = () => {
      var hashParams = {};
      var e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    };
    var params = getHashParams();

    var err = params.error;

    if (!err) {
      console.log(params["expires_in"]);
      setAccessToken(params.access_token);
      setRefreshToken(params.refresh_token);

      fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + params.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((resJson) => setUserInfo(resJson))
        .catch((err) => {});
    }
  }, []);

  useEffect(() => {
    const refreshTokenInterval = setInterval(() => {
      fetch(
        "http://localhost:8888/refresh_token?refresh_token=" + refreshToken,
        {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type":"application/json"
          }
        }
      )
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson["access_token"]);
          setAccessToken(resJson["access_token"]);
        })
        .catch((err) => {});
    }, 3000 * 1000);

    return () => {
      clearInterval(refreshTokenInterval);
    };
  }, [refreshToken]);

  return (
    <>
      {accessToken ? (
        <Main accessToken={accessToken} userInfo={userInfo} />
      ) : (
        <Homepage />
      )}
    </>
  );
}

export default App;
