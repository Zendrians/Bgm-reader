import React, { useState } from "react";
import { ReactReader } from "react-reader";
import "./BookSection.scss";

const BookSection: React.FC = () => {
  const [location, setLocation] = useState<string | number>(0);
  const locationChanged = (epubcifi: string | number) => {
    console.log(epubcifi)
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi);
  };

  console.log("rerender")

  return (
    <section className="bookSection">
      <ReactReader
        location={location}
        showToc={false}
        locationChanged={locationChanged}
        url="testbook\V.0.10.epub"
      />
    </section>
  );
};

export default BookSection;
