import React from "react";
import ActionsBar from "../ActionsBar/ActionsBar";
import BookNavBar from "../BookNavBar/BookNavBar";
import BookSection from "../BookSection/BookSection";
import "./ReaderLayout.scss";

const ReaderLayout: React.FC = () => {
  return (
    <main className="readerLayout">
      <nav className="readerLayout--nav">
        Nav here with appName / BookTile/ currentBGM
      </nav>
      <BookNavBar />
      <BookSection />
      <ActionsBar />
    </main>
  );
};

export default ReaderLayout;
