import React, { useContext, useState } from "react";
import { ReactReader } from "react-reader";
import { LocationContext } from "../../../../context/locactionContext";
import { Rendition } from "epubjs";
import { Toc } from "../../../../types/gobalTypes";
import { TocContext } from "../../../../context/tocContext";
import {
  getChapterNumberFromEpubCFI,
  parseEpubCFI,
} from "../../../../utils/epubCFI";
import "./BookSection.scss";

const BookSection: React.FC = () => {
  const { location, updateLocation } = useContext(LocationContext);
  const { updateToc } = useContext(TocContext);

  const locationChanged = (epubcifi: string | number) => {
    // console.log(epubcifi);
    // let currentChapter;
    // if (typeof epubcifi === "string") {
    //   currentChapter = getChapterNumberFromEpubCFI(epubcifi);
    // }
    // console.log(currentChapter);
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
        url="testbook\V.0.10.epub"
      />
    </section>
  );
};

export default BookSection;
