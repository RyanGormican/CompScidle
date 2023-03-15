
import "./App.css";
import Input from "./components/Input";
import Tiles from "./components/Tiles";
import { getTileSet,  tileDefault } from "./components/TilesGen";
import { createContext, useEffect, useState } from "react";
import GameState from "./components/GameState";
import { Icon } from '@iconify/react';


export const Context = createContext();
function App() {
    const [tiles, setTiles] = useState(tileDefault);
    const [tileAt, setTileAt] = useState({ charPos: 0, tileattemp: 0 });
    const [tileSet, setTileSet] = useState(new Set());
    const [removeTiles, setRemoveTiles] = useState([]);
    const [gameState, setGameState] = useState({gameState: false, guessWord:  false});
    const [theWord, setTheWord] = useState("");
  useEffect(() => {
     getTileSet().then((words)=> {
       setTileSet(words.tileSet);
      setTheWord(words.todayWord);
     });
  }, []);
      
 
    const setChar = (InputValue) => {
           if (tileAt.charPos > 4) return;
         const tileState =  [...tiles];
    tileState[tileAt.tileattemp][tileAt.charPos]= InputValue;
    setTiles(tileState);
   setTileAt({tileattemp: tileAt.tileattemp, charPos: tileAt.charPos +1 });
    };
   
    const deleteChar = () => {
         if (tileAt.charPos === 0) return;
        const tileState =  [...tiles];
    tileState[tileAt.tileattemp][tileAt.charPos-1]= "";
    setTiles(tileState);
   setTileAt({...tileAt, charPos: tileAt.charPos -1 });
    };
    
    const setWord = () => {
              if (tileAt.charPos !== 5) return;
        
     let grabWord ="";
     for (let i=0; i <5; i++) {
      grabWord += tiles[tileAt.tileattemp][i];
     }  
       if (tileSet.has(grabWord.toLowerCase())) {  
       setTileAt({tileattemp: tileAt.tileattemp + 1, charPos: 0 });  
       }
       else
       {
       alert("The word inputted is not a valid word");
       return;
       }

     if (grabWord.toLowerCase() === theWord)
     {
      setGameState({gameState: true, guessWord: true });
      return;
     }
       
        if (tileAt.tileattemp === 5)
        {
             setGameState({gameState: true, guessWord: false }); 
             return;
        }
       
    };

   
  return (
    <div className="App">
    <nav>
    <h1> CompScidle
    </h1>
     <span>
    <a href="https://www.linkedin.com/in/ryangormican/">
		<Icon icon="mdi:linkedin" color="#0e76a8" width="40" />
	</a>
    <a href="https://ryangormicanportfoliohub.vercel.app/">
		<Icon icon="teenyicons:computer-outline" color="#199c35" width="40" />
	</a>
	<a href="https://github.com/RyanGormican/CompScidle">
		<Icon icon="mdi:github" color="#e8eaea" width="40" />
	</a>
    </span>
    </nav>
      <Context.Provider value ={{tiles, setTiles, tileAt, setTileAt, setChar, deleteChar, setWord, theWord, removeTiles, setRemoveTiles, gameState, setGameState}}>
    <div className="space">
    <Tiles />
     {gameState.gameState ? <GameState /> : <Input />}
     </div>
      </Context.Provider>
    </div>
  );
}

export default App;
