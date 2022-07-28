import { Book } from "../types/gobalTypes";
import { dark1, desert1, hopefull1, nightForest } from "./bgms";

export const testBook: Book = {
  url: "testbook/V.0.10.epub",
  name: "Test Manuscript",
  playlist: [
    { ...dark1, chapter: 1 },
    { ...desert1, chapter: 2 },
    { ...hopefull1, chapter: 3 },
    { ...nightForest, chapter: 18 },
  ],
};

export const aliceInWonderland: Book = {
  url: "https://react-reader.metabits.no/files/alice.epub",
  name: "Alice in Wonderland",
  playlist: [],
};

export const loremIpsumBook: Book = {
  url: "testbook/LoremIpsumBook.epub",
  name: "Lorem Ipsum Book",
  playlist: [
    { ...dark1, chapter: 1 },
    { ...desert1, chapter: 2 },
    { ...nightForest, chapter: 3 },
    { ...hopefull1, chapter: 4 },
  ],
};
