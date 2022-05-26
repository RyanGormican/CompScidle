
import "./App.css";
import Input from "./components/Input";
import Tiles from "./components/Tiles";
import { tileDefault } from "./components/TilesGen";
import { createContext, useState } from "react";

export const Context = createContext();
function App() {
    const [tiles, setTiles] = useState(tileDefault);
    const [tileAt, setTileAt] = useState{{ charPos: 0, tileattemp: 0 });
  return (
    <div className="App">
    <nav>
    <h1> CompScidle
    </h1>
    </nav>
      <Context.Provider value ={{tiles, setTiles tileAt, setTileAt}}>
    <div className="space">
    <Tiles />
    <Input />
     </div>
      </Context.Provider>
    </div>
  );
}

export default App;
