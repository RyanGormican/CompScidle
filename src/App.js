
import "./App.css";
import Input from "./components/Input";
import Tiles from "./components/Tiles";
import { tileDefault } from "./components/TilesGen";
import { createContext, useState } from "react";

export const Context = createContext();
function App() {
    const [tiles, setTiles] = useState(tileDefault);
    const [tileAt, setTileAt] = useState{{ charPos: 0, tileattemp: 0 });
                                         
    const setChar = (InputValue) => {
         const tileState =  [...tiles];
    tileState[tileAt.tileattemp][tileAt.charPos]= InputValue;
    setTiles(tileState);
   setTileAt({...tileAt, tileAt.charPos +1 });
    }
   
    const deleteChar = () => {
         if (tileAt.charPos === 0) return;
        const tileState =  [...tiles];
    tileState[tileAt.tileattemp][tileAt.charPos-1]= "";
    setTiles(tileState);
   setTileAt({...tileAt, tileAt.charPos -1 });
    }
    
    const setWord = () => {
              if (tileAt.charPos !== 5) return;
       setTileAt({tileattemp: tileAt.tileattemp +1, charPos: 0 });  
        
    }
  return (
    <div className="App">
    <nav>
    <h1> CompScidle
    </h1>
    </nav>
      <Context.Provider value ={{tiles, setTiles, tileAt, setTileAt, setChar, deleteChar, setWord}}>
    <div className="space">
    <Tiles />
    <Input />
     </div>
      </Context.Provider>
    </div>
  );
}

export default App;
