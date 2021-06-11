import React, { useState } from "react";
import { ReactComponent as PlayIcon } from "./play.svg";
import { ReactComponent as PauseIcon } from "./pause.svg";
import { ReactComponent as NextTrackIcon } from "./next-track.svg";
import { ReactComponent as PrevTrackIcon } from "./prev-track.svg";

const ControlButtons = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const setShowPremiumRequired = (state) => {
    props.showErrorMsg(state);
  };

  const handleSetPlaying = () => {
    if (isPlaying) {
      fetch("	https://api.spotify.com/v1/me/player/pause", {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + props.accessToken,
        },
      })
        .then((res) => res.json())
        .then((resJson) => {
          if (resJson.error?.reason) {
            setShowPremiumRequired(true);
            setTimeout(() => {
              setShowPremiumRequired(false);
            }, 3000);
          } else {
            setIsPlaying(false);
          }
        })
        .catch((err) => {
          throw err;
        });
    } else {
      fetch("	https://api.spotify.com/v1/me/player/play", {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + props.accessToken,
        },
      })
          .then((res) => res.json())
        .then((resJson) => {
          if (resJson.error?.reason) {
            setShowPremiumRequired(true);
            setTimeout(() => {
              if (document.querySelector(".error")) {
                document.querySelector(".error").style.opacity = "0";
              }
              setTimeout(() => {
                setShowPremiumRequired(false);
              }, 300);
            }, 2700);
          }
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  const goNext = () => {
    fetch("http://localhost:8888/next", {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + props.accessToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.error?.reason) {
          setShowPremiumRequired(true);
          setTimeout(() => {
            if (document.querySelector(".error")) {
              document.querySelector(".error").style.opacity = "0";
            }
            setTimeout(() => {
              setShowPremiumRequired(false);
            }, 300);
          }, 2700);
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  const goPrev = () => {
    fetch("	https://api.spotify.com/v1/me/player/previous", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + props.accessToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.error?.reason) {
          setShowPremiumRequired(true);
          setTimeout(() => {
            if (document.querySelector(".error")) {
              document.querySelector(".error").style.opacity = "0";
            }
            setTimeout(() => {
              setShowPremiumRequired(false);
            }, 300);
          }, 2700);
        }
      })
      .catch((err) => {});
  };

  return (
    <div className="control-btns">
      <PrevTrackIcon onClick={goPrev} />
      {isPlaying ? (
        <PauseIcon onClick={handleSetPlaying} />
      ) : (
        <PlayIcon onClick={handleSetPlaying} />
      )}
      <NextTrackIcon onClick={goNext} />
    </div>
  );
};

export default ControlButtons;
