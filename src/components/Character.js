import React, { useContext, useEffect } from "react";
import { Context } from "../App";

function Character({ inputVal, charPos}) {
  const { tiles, theWord, tileAt, setRemoveTiles } = useContext(Context);
  const character = tiles[inputVal][charPos];
  
  const correctSpot = theWord.toUpperCase()[charPos] === character;
  const wrongSpot = !correctSpot && character !== "" && theWord.includes(character);
  const characterState =  tileAt.tileattemp > inputVal && (correctSpot ? "correct" : wrongSpot ? "wrongspot": "incorrect");
  
  useEffect(() => {
    if (character !== "" && !correctSpot && !wrongSpot) {
     setRemoveTiles((prev) => [...prev, character]);
    }
  }, [tileAt.tileattemp] );
  
  
  return <div className ="character" id={characterState}> {character} </div>;
   
}

export default Character;
