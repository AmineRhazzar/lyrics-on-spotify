import React, { useEffect, useState } from "react";
import { ReactComponent as PlayIcon } from "./play.svg";
import { ReactComponent as PauseIcon } from "./pause.svg";
import { ReactComponent as NextTrackIcon } from "./next-track.svg";
import { ReactComponent as PrevTrackIcon } from "./prev-track.svg";

const ControlButtons = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8888/pause", {
      method: "PUT",
    }).catch((err) => {});
  }, []);

  const handleSetPlaying = () => {
    fetch("http://localhost:8888/playpause", {
      method: "PUT",
    })
      .then((res) => {
        if (res.status === 204) {
          setIsPlaying(!isPlaying);
          console.log(isPlaying);
        }
      })
      .catch((err) => {});
  };

  const goNext = () => {
    fetch("http://localhost:8888/next", {
      method: "PUT",
    })
      .then((res) => {
        if (!isPlaying) {
          setIsPlaying(true);
        }
        try {
          var button = document.getElementById("get-next");
          button.click();
        } catch (e) {}
      })
      // .then((res) => res.json())
      // .then((resJson) => {
      //   if (resJson.error?.reason) {
      //     setShowPremiumRequired(true);
      //     setTimeout(() => {
      //       if (document.querySelector(".error")) {
      //         document.querySelector(".error").style.opacity = "0";
      //       }
      //       setTimeout(() => {
      //         setShowPremiumRequired(false);
      //       }, 300);
      //     }, 2700);
      //   }
      // })
      .catch((err) => {});
  };

  const goPrev = () => {
    fetch("	http://localhost:8888/prev", {
      method: "PUT",
    })
      .then((res) => {
        if (!isPlaying) {
          setIsPlaying(true);
        }
        try {
          var button = document.getElementById("get-next");
          button.click();
        } catch (e) {}
      })
      // .then((res) => res.json())
      // .then((resJson) => {
      //   if (resJson.error?.reason) {
      //     setShowPremiumRequired(true);
      //     setTimeout(() => {
      //       if (document.querySelector(".error")) {
      //         document.querySelector(".error").style.opacity = "0";
      //       }
      //       setTimeout(() => {
      //         setShowPremiumRequired(false);
      //       }, 300);
      //     }, 2700);
      //   }
      // })
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
