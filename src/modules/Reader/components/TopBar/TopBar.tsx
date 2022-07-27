import React from "react";
import MusicIcon from "../../../../assets/tsxSvg/Music";
import { Book } from "../../../../types/gobalTypes";
import "./TopBar.scss";

interface ITopBar {
  book: Book;
}

const TopBar: React.FC<ITopBar> = ({ book }) => {
  return (
    <nav className="topBar">
      <div className="topBar--wrapper">
        <div className="topBar--logoSpace">
          <MusicIcon fill="white" width={25} /> <span>Readify</span>
        </div>
        <div className="topBar--bookTile">{book.name}</div>
        <div></div>
      </div>
    </nav>
  );
};

export default TopBar;
