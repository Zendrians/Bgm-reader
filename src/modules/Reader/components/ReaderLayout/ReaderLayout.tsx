import React from "react";
import { Book } from "../../../../types/gobalTypes";
import ActionsBar from "../ActionsBar/ActionsBar";
import BookNavBar from "../BookNavBar/BookNavBar";
import BookSection from "../BookSection/BookSection";
import "./ReaderLayout.scss";

interface IReactReader {
  book: Book;
}

const ReaderLayout: React.FC<IReactReader> = ({ book }) => {
  return (
    <main className="readerLayout">
      <nav className="readerLayout--nav">
        Nav here with appName / BookTile/ currentBGM
      </nav>
      <BookNavBar />
      <BookSection book={book} />
      <ActionsBar />
    </main>
  );
};

export default ReaderLayout;
