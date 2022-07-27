import React, { useContext, useState } from "react";
import ReactHowler from "react-howler";
import { ChapterContext } from "../../../../context/chapterContext";
import { Bgm, Book } from "../../../../types/gobalTypes";
import "./AudioController.scss";

interface IAudioController {
  book: Book;
}

const AudioController: React.FC<IAudioController> = ({ book }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const { chapter } = useContext(ChapterContext);

  const setChapterBgm = () => {
    const matchedBgm = book.playlist.find((bgm) => bgm.chapter === chapter);
    console.log(matchedBgm);
    if (matchedBgm) return matchedBgm;
    return null;
  };

  const currentBgm: Bgm | null = setChapterBgm();

  return (
    <div className="audioController">
      {currentBgm ? (
        <React.Fragment>
          <ReactHowler
            src={currentBgm.url}
            playing={isPlaying}
            loop={true}
            volume={0.3}
          />
          <div>
            <span>{currentBgm.name}</span>
          </div>
          <button onClick={() => setIsPlaying(false)}>pause!!</button>
          <button onClick={() => setIsPlaying(true)}>play!!</button>
        </React.Fragment>
      ) : (
        <div>No Bgm for this chapter</div>
      )}
    </div>
  );
};

export default AudioController;
