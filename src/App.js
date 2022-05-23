
import "./App.css";
import Input from "./components/Input";
import Tiles from "./components/Tiles";
import { createContext } from "react";

export const Context = createContext();
function App() {
    const [tiles, setTiles] = useState(tileDefault);
  return (
    <div className="App">
    <nav>
    <h1> CompScidle
    </h1>
    </nav>
      <Context.Provider value ={{tiles, setTiles}}>
    <Tiles />
    <Input />
      </Context.Provider>
    </div>
  );
}

export default App;
