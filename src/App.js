
import "./styles/app.scss";

//adding components
import Player from "./components/Player";
import Song from "./components/Songs";

function App() {
  return (
    <div className="App">
        <Song />
        <Player />
    </div>
  );
}

export default App;