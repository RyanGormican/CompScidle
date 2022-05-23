import React, { useContext } from "react";
import { Context } from "../App";

function Character({ inputVal, charPos}) {
  const { tiles } = useContext(Context);
  const character = tiles[inputVal][charPos];
  return <div className ="character"> {character} </div>;
    
}

export default Character;
