import React from "react";

interface IChapterContext {
  chapter: number;
  updateChapter: (newChapter: number) => void;
}

export const ChapterContext = React.createContext<IChapterContext>({
  chapter: 0,
  updateChapter: () => {},
});

const ChapterContextWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [chapter, setChapter] = React.useState<number>(0);

  const handleChangeChapter = (newChapter: number) => {
    if (newChapter === chapter) return;
    setChapter(newChapter);
  };

  return (
    <ChapterContext.Provider
      value={{ chapter: chapter, updateChapter: handleChangeChapter }}
    >
      {children}
    </ChapterContext.Provider>
  );
};

export default ChapterContextWrapper;
