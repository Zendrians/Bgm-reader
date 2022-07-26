import { EpubCFI } from "epubjs";
// import resolver from "epub-cfi-resolver";
var CFI = require("epub-cfi-resolver");

const libEpubCfiInstance = new EpubCFI();

export function isValidEpubCfi(str: string) {
  //   console.log(instance.isCfiString(str));
  return libEpubCfiInstance.isCfiString(str);
}

export function parseEpubCFI(str: string) {
  //   console.log(libEpubCfiInstance.parse(str));
  //   console.log(new CFI(str));
  return new CFI(str);
}

export function getChapterNumberFromEpubCFI(str: string) {
  const parsedCFI = parseEpubCFI(str);
  const chapterNodeId = parsedCFI.parts[0][1].nodeIndex;
  return chapterNodeId / 2;
}
