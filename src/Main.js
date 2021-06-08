import React from "react";
import Sidebar from "./Sidebar";
import ControlButtons from "./ControlButtons";
import Facade from "./Facade";

const Main = (props) => {
  // console.log(props.userInfo);
  return (
    <main>
      <Sidebar accessToken={props.accessToken} userId={props.userInfo.id} />
      <Facade accessToken={props.accessToken} />
      <ControlButtons accessToken={props.accessToken} />
    </main>
  );
};

export default Main;
