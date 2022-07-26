import "./App.css";
import LocationContextWrapper from "./context/locactionContext";
import "./modules/Reader/container/ReaderContainer";
import ReaderContainer from "./modules/Reader/container/ReaderContainer";

function App() {
  return (
    <LocationContextWrapper>
      <ReaderContainer />
    </LocationContextWrapper>
  );
}

export default App;
