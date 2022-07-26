import React from "react";
import { Toc } from "../../../../types/gobalTypes";
import "./TocTile.scss";

interface ITocTile {
  tocItem: Toc;
  goToChapter: (chapter: string | number) => void;
}

const TocTile: React.FC<ITocTile> = ({ tocItem, goToChapter }) => {
  return (
    <li className="tocTile">
      <button
        className="tocTile--button"
        onClick={() => goToChapter(tocItem.href)}
      >
        {tocItem.label}
      </button>
    </li>
  );
};

export default TocTile;
