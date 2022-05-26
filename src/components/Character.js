import React, { useContext } from "react";
import { Context } from "../App";

function Character({ inputVal, charPos}) {
  const { tiles, theWord } = useContext(Context);
  const character = tiles[inputVal][charPos];
  
  const correct = theWord[charPos] === character;
  const wrongSpot
  const characterState =
  return <div className ="character" id={}> {character} </div>;
    
}

export default Character;
