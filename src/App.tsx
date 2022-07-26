import "./App.css";
import LocationContextWrapper from "./context/locactionContext";
import TocContextWrapper from "./context/tocContext";
import "./modules/Reader/container/ReaderContainer";
import ReaderContainer from "./modules/Reader/container/ReaderContainer";

function App() {
  return (
    <TocContextWrapper>
      <LocationContextWrapper>
        <ReaderContainer />
      </LocationContextWrapper>
    </TocContextWrapper>
  );
}

export default App;
