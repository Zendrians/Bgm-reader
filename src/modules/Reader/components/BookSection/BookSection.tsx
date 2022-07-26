import React, { useContext, useState } from "react";
import { ReactReader } from "react-reader";
import { LocationContext } from "../../../../context/locactionContext";
import { Rendition } from "epubjs";
import { Toc } from "../../../../types/gobalTypes";
import "./BookSection.scss";
import { TocContext } from "../../../../context/tocContext";

const BookSection: React.FC = () => {
  const { location, updateLocation } = useContext(LocationContext);
  const { updateToc } = useContext(TocContext);

  const locationChanged = (epubcifi: string | number) => {
    console.log(epubcifi);
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
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
        url="testbook\V.0.10.epub"
      />
    </section>
  );
};

export default BookSection;
