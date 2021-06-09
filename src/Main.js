import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ControlButtons from "./Controls/ControlButtons";
import Facade from "./Facade/Facade";

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
