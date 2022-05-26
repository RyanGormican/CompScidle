import React, { useContext } from "react";
import { Context } from "../App";
function InputKey({ InputValue, specialInput }) {
 const { tiles,setTiles } = useContext(Context);
  const getKey = () => {
    const tileState =  [...tiles];
    tileState[0][0]= InputValue;
    setTiles(tileState);
  }
  return <div className="Inputkey" id ={specialInput && "special"} onClick=(getKey)> {InputValue} </div> ;
}

export default InputKey;
