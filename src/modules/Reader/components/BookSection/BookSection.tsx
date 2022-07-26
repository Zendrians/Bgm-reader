import React, { useContext, useState } from "react";
import { ReactReader } from "react-reader";
import { LocationContext } from "../../../../context/locactionContext";
import { Toc } from "../../../../types/gobalTypes";
import "./BookSection.scss";

const BookSection: React.FC = () => {
  const { location, updateLocation } = useContext(LocationContext);

  const locationChanged = (epubcifi: string | number) => {
    console.log(epubcifi);
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    updateLocation(epubcifi);
  };

  const tocUpdated = (value: Toc) => {
    console.log(value);
  };
  const renditionUpdated = (value: any) => {
    console.log(value);
  };

  console.log("rerender");

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
