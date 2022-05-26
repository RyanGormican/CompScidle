import React, { useContext } from "react";
import { Context } from "../App";
function InputKey({ InputValue, specialInput }) {
 const { tiles,setTiles, tileAt} = useContext(Context);
  const getKey = () => {
    const tileState =  [...tiles];
    tileState[tileAt.tileattemp][tileAt.charPos]= InputValue;
    setTiles(tileState);
  }
  return <div className="Inputkey" id ={specialInput && "special"} onClick=(getKey)> {InputValue} </div> ;
}

export default InputKey;
