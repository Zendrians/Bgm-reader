import React from "react";
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
      <aside className="readerLayout--sidebar">music and others here</aside>
    </main>
  );
};

export default ReaderLayout;
