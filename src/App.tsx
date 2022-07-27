import ChapterContextWrapper from "./context/chapterContext";
import LocationContextWrapper from "./context/locactionContext";
import TocContextWrapper from "./context/tocContext";
import "./modules/Reader/container/ReaderContainer";
import ReaderContainer from "./modules/Reader/container/ReaderContainer";

function App() {
  return (
    <TocContextWrapper>
      <LocationContextWrapper>
        <ChapterContextWrapper>
          <ReaderContainer />
        </ChapterContextWrapper>
      </LocationContextWrapper>
    </TocContextWrapper>
  );
}

export default App;
