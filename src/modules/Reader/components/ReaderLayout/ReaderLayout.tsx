import React from "react";
import { Book } from "../../../../types/gobalTypes";
import ActionsBar from "../ActionsBar/ActionsBar";
import BookNavBar from "../BookNavBar/BookNavBar";
import BookSection from "../BookSection/BookSection";
import TopBar from "../TopBar/TopBar";
import "./ReaderLayout.scss";

interface IReactReader {
  book: Book;
}

const ReaderLayout: React.FC<IReactReader> = ({ book }) => {
  return (
    <main className="readerLayout">
      <TopBar book={book} />
      <BookNavBar />
      <BookSection book={book} />
      <ActionsBar book={book} />
    </main>
  );
};

export default ReaderLayout;
