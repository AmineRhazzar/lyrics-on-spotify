import React, { useState } from "react";
import ControlButtons from "./ControlButtons";
import ErrorMsg from "./ErrorMsg";

const ControlBar = (props) => {

  const [isErrorMsg, setIsErrorMsg] = useState(false);

  const showErrorMsg = (state) => {
    setIsErrorMsg(state);
  }

  return (
    <div className="control">
      <ControlButtons
        accessToken={props.accessToken}
        showErrorMsg={showErrorMsg}
      />
       {isErrorMsg ? <ErrorMsg />:<></>}
    </div>
  );
};

export default ControlBar;
