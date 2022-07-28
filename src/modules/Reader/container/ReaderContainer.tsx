import React from "react";
import { Book } from "../../../types/gobalTypes";
import {
  aliceInWonderland,
  loremIpsumBook,
  testBook,
} from "../../../data/books";
import ReaderLayout from "../components/ReaderLayout/ReaderLayout";

const ReaderContainer: React.FC = () => {
  const loadedBook: Book = loremIpsumBook;

  return <ReaderLayout book={loadedBook} />;
};

export default ReaderContainer;
