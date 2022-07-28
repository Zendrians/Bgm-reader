import React, { useContext, useState } from "react";
import { ReactReader } from "react-reader";
import { LocationContext } from "../../../../context/locactionContext";
import { Rendition } from "epubjs";
import { Book, Toc } from "../../../../types/gobalTypes";
import { TocContext } from "../../../../context/tocContext";
import {
  getChapterNumberFromEpubCFI,
  isValidEpubCfi,
} from "../../../../utils/epubCFI";
import "./BookSection.scss";
import { ChapterContext } from "../../../../context/chapterContext";

interface IBookSection {
  book: Book;
}

const BookSection: React.FC<IBookSection> = ({ book }) => {
  const { location, updateLocation } = useContext(LocationContext);
  const { updateToc } = useContext(TocContext);
  const { updateChapter } = useContext(ChapterContext);

  const locationChanged = (epubcifi: string | number) => {
    // console.log(epubcifi);

    if (typeof epubcifi === "string" && isValidEpubCfi(epubcifi)) {
      const currentChapter = getChapterNumberFromEpubCFI(epubcifi);
      // console.log(currentChapter);
      updateChapter(currentChapter);
    }

    updateLocation(epubcifi);
  };

  const tocUpdated = (newToc: any) => {
    updateToc(newToc as Array<Toc>);
  };
  const renditionUpdated = (value: Rendition) => {
    console.log(value);
  };

  return (
    <section className="bookSection">
      <ReactReader
        location={location}
        showToc={false}
        locationChanged={locationChanged}
        tocChanged={tocUpdated}
        getRendition={renditionUpdated}
        // url="https://react-reader.metabits.no/files/alice.epub"
        url={book.url}
      />
    </section>
  );
};

export default BookSection;
