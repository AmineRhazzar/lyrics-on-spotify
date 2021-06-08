import React, { useState, useEffect } from "react";
import Main from "./Main";
import Homepage from "./Homepage";

function App() {
  const [accessToken, setAccessToken] = useState("");
  //const [refreshToken, setRefreshToken] = useState("");

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
      setAccessToken(params.access_token);
      //setRefreshToken(params.refresh_token);
    }
  }, []);

  return <>{accessToken ? <Main accessToken={accessToken} /> : <Homepage />}</>;
}

export default App;
