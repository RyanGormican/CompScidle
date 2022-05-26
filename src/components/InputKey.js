import React, { useContext } from "react";
import { Context } from "../App";
function InputKey({ InputValue, specialInput }) {
 const { tiles,setTiles, tileAt, setTileAt} = useContext(Context);
  const getKey = () => {
    if (InputValue === "ENTER"){
        if (tileAt.charPos !== 5) return;
       setTileAt({tileattemp: tileAt.tileattemp +1, charPos: 0 });
    }
   else if(InputValue === "DELETE"){
    if (tileAt.charPos === 0) return;
        const tileState =  [...tiles];
    tileState[tileAt.tileattemp][tileAt.charPos-1]= "";
    setTiles(tileState);
   setTileAt({...tileAt, tileAt.charPos -1 });
   }
   else
   {
   if (tileAt.charPos > 4) return;
    const tileState =  [...tiles];
    tileState[tileAt.tileattemp][tileAt.charPos]= InputValue;
    setTiles(tileState);
   setTileAt({...tileAt, tileAt.charPos +1 });
   }
  };
  return <div className="Inputkey" id ={specialInput && "special"} onClick=(getKey)> {InputValue} </div> ;
}

export default InputKey;
