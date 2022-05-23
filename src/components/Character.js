import React from "react";

function Character({ inputVal, charPos}) {
  const character = tiles[inputVal][charPos];
  return <div className ="character"> {character} </div>;
    
}

export default Character;
