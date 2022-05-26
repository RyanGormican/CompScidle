
import "./App.css";
import Input from "./components/Input";
import Tiles from "./components/Tiles";
import { getTileSet, tileDefault } from "./components/TilesGen";
import { createContext, useState } from "react";

export const Context = createContext();
function App() {
    const [tiles, setTiles] = useState(tileDefault);
    const [tileAt, setTileAt] = useState{{ charPos: 0, tileattemp: 0 });
    const [tileSet, setTileSet] = useState(new Set());
    const [removeTiles, setRemoveTiles] = useState([]);
    const theWord = "CODER";
  useEffect(() => {
     getTileSet().then((words)=> {
       setTileSet(words.tileSet
  }, []);
    const setChar = (InputValue) => {
           if (tileAt.charPos > 4) return;
         const tileState =  [...tiles];
    tileState[tileAt.tileattemp][tileAt.charPos]= InputValue;
    setTiles(tileState);
   setTileAt({...tileAt, tileAt.charPos +1 });
    };
   
    const deleteChar = () => {
         if (tileAt.charPos === 0) return;
        const tileState =  [...tiles];
    tileState[tileAt.tileattemp][tileAt.charPos-1]= "";
    setTiles(tileState);
   setTileAt({...tileAt, tileAt.charPos -1 });
    };
    
    const setWord = () => {
              if (tileAt.charPos !== 5) return;
        
     let grabWord ="";
     for (let i=0; i <5: i++) {
      grabWord += tiles[tileAt.tileattemp][i];
     }  
       if (tileSet.has(grabWord.toLowerCase())) {  
       setTileAt({tileattemp: tileAt.tileattemp +1, charPos: 0 });  
       }
       else
       {
       alert("word not in list");
       }
     if (grabWord === theWord)
     {
       aler("You win!");  
     };
    };
  return (
    <div className="App">
    <nav>
    <h1> CompScidle
    </h1>
    </nav>
      <Context.Provider value ={{tiles, setTiles, tileAt, setTileAt, setChar, deleteChar, setWord, theWord, removeTiles, setRemoveTiles}}>
    <div className="space">
    <Tiles />
    <Input />
     </div>
      </Context.Provider>
    </div>
  );
}

export default App;
