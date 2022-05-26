import React, { useContext } from "react";
import { Context } from "../App";

function Character({ inputVal, charPos}) {
  const { tiles, theWord } = useContext(Context);
  const character = tiles[inputVal][charPos];
  
  const correctSpot = theWord[charPos] === character;
  const wrongSpot = !correctSpot && character !== "" && theWord.includes(character);
  const characterState = correctSpot ? "correct" : wrongSpot ? "wrongspot": "incorrect";
  return <div className ="character" id={}> {character} </div>;
    
}

export default Character;
