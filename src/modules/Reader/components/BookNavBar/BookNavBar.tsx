import React, { useContext } from "react";
import { LocationContext } from "../../../../context/locactionContext";
import { TocContext } from "../../../../context/tocContext";
import "./BookNavBar.scss";

const BookNavBar: React.FC = () => {
  const { updateLocation } = useContext(LocationContext);
  const { toc } = useContext(TocContext);

  const goToChapter = (chapterId: string | number) => {
    updateLocation(chapterId);
  };

  const generateTocUiList = () => {
    if (!toc) return <div>No Toc</div>;
    return toc.map((tocEl) => <div>{tocEl.label}</div>);
  };

  return (
    <aside className="bookNavBar">
      {/* this is the new nab{" "}
      <button onClick={() => goToChapter("body4.xhtml")}>go</button> */}
      {generateTocUiList()}
    </aside>
  );
};

export default BookNavBar;
