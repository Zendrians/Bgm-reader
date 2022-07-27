import React, { useContext, useState } from "react";
import ReactHowler from "react-howler";
import MusicIcon from "../../../../assets/tsxSvg/Music";
import PauseIcon from "../../../../assets/tsxSvg/Pause";
import PlayIcon from "../../../../assets/tsxSvg/Play";
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
          <div className="audioController--uiContainer">
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? (
                <PauseIcon fill="white" width={25} />
              ) : (
                <PlayIcon fill="white" width={25} />
              )}
            </button>
            <span>{currentBgm.name}</span>
          </div>
        </React.Fragment>
      ) : (
        <div className="audioController--noUiContainer">
          <p>No BGM for this chapter</p>
        </div>
      )}
    </div>
  );
};

export default AudioController;
