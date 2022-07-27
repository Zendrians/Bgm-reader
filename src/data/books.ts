import { Book } from "../types/gobalTypes";
import { dark1, desert1, hopefull1, nightForest } from "./bgms";

export const testBook: Book = {
  url: "testbook/V.0.10.epub",
  playlist: [
    { ...dark1, chapter: 1 },
    { ...desert1, chapter: 2 },
    { ...hopefull1, chapter: 3 },
    { ...nightForest, chapter: 18 },
  ],
};
