import React, { useContext, useState } from "react";
import ReactHowler from "react-howler";
import { ChapterContext } from "../../../../context/chapterContext";

import "./AudioController.scss";

const AudioController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const { chapter } = useContext(ChapterContext);

  const setChapterBgm = () => {
    if (chapter === 1) return "testAudio/Dark.mp3";
    if (chapter === 2) return "testAudio/Desert.mp3";
    return "testAudio/Hopeful.mp3";
  };

  const currentBgm = setChapterBgm();

  return (
    <div className="audioController">
      <ReactHowler
        src={currentBgm}
        playing={isPlaying}
        loop={true}
        volume={0.3}
      />
      <button onClick={() => setIsPlaying(false)}>pause!!</button>
      <button onClick={() => setIsPlaying(true)}>play!!</button>
    </div>
  );
};

export default AudioController;
