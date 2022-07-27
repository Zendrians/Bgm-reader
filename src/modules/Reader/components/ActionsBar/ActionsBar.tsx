import React from "react";
import AudioController from "../AudioController/AudioController";
import "./ActionBar.scss";

const ActionBar: React.FC = () => {
  return (
    <aside className="actionsBar">
      <AudioController />
    </aside>
  );
};

export default ActionBar;
