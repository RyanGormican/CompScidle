import React, { useContext } from "react";
import { Context } from "../App";

function Character({ inputVal, charPos}) {
  const { tiles, theWord, tileAt } = useContext(Context);
  const character = tiles[inputVal][charPos];
  
  const correctSpot = theWord[charPos] === character;
  const wrongSpot = !correctSpot && character !== "" && theWord.includes(character);
  const characterState =  tileAt.charPos > charPos && (correctSpot ? "correct" : wrongSpot ? "wrongspot": "incorrect");
  
  use effect(() => {
    
    
  }, [tileAt.tileattemp] );
  
  
  return <div className ="character" id={}> {character} </div>;
   
}

export default Character;
