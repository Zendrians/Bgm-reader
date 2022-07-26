import React, { useContext } from "react";
import { LocationContext } from "../../../../context/locactionContext";
import { TocContext } from "../../../../context/tocContext";
import TocTile from "../TocTile/TocTile";
import "./BookNavBar.scss";

const BookNavBar: React.FC = () => {
  const { updateLocation } = useContext(LocationContext);
  const { toc } = useContext(TocContext);

  const goToChapter = (chapterId: string | number) => {
    updateLocation(chapterId);
  };

  const generateTocUiList = () => {
    if (!toc) return <div>No Toc</div>;
    return toc.map((tocEl) => (
      <TocTile tocItem={tocEl} goToChapter={goToChapter} key={tocEl.id} />
    ));
  };

  return (
    <aside className="bookNavBar">
      <ol>{generateTocUiList()}</ol>{" "}
    </aside>
  );
};

export default BookNavBar;
