import React from "react";
import MusicIcon from "../../../../assets/tsxSvg/Music";
import "./TopBar.scss";

const TopBar: React.FC = () => {
  return (
    <nav className="topBar">
      <div className="topBar--wrapper">
        <div className="topBar--logoSpace">
          <MusicIcon fill="white" width={25} /> <span>Readify</span>
        </div>
        <div className="topBar--bookTile">Test Book</div>
        <div></div>
      </div>
    </nav>
  );
};

export default TopBar;
