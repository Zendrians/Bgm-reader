import React from "react";
import { Book } from "../../../../types/gobalTypes";
import AudioController from "../AudioController/AudioController";
import "./ActionBar.scss";

interface IActionBar {
  book: Book;
}

const ActionBar: React.FC<IActionBar> = ({ book }) => {
  return (
    <aside className="actionsBar">
      <AudioController book={book} />
    </aside>
  );
};

export default ActionBar;
