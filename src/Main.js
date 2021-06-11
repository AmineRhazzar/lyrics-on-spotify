import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ControlBar from "./Controls/ControlBar";
import Facade from "./Facade/Facade";

const Main = (props) => {
  // console.log(props.userInfo);

  const getCurrentTrack = () => {
    
  }

  return (
    <main>
      <Sidebar accessToken={props.accessToken} userId={props.userInfo.id} />
      <Facade accessToken={props.accessToken} />
      <ControlBar accessToken={props.accessToken} getCurrentTrack={getCurrentTrack }/>
    </main>
  );
};

export default Main;
