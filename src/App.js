
import "./App.css";
import Input from "./components/Input";
import Tiles from "./components/Tiles";

function App() {
    const [tiles, setTiles] = useState(tileDefault);
  return (
    <div className="App">
    <nav>
    <h1> CompScidle
    </h1>
    </nav>
    <Tiles />
    <Input />
    </div>
  );
}

export default App;
