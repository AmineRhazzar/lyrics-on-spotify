import React from "react";
import Sidebar from "./Sidebar";
import ControlButtons from "./ControlButtons";
import Facade from "./Facade";

const Main = (props) => {
  return (
    <main>
      <Sidebar />
      <Facade accessToken={props.accessToken} />
      <ControlButtons />
    </main>
  );
};

export default Main;
