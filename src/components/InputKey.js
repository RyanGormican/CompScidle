import React, { useContext } from "react";
import { Context } from "../App";
function InputKey({ InputValue, specialInput, removed }) {
 const { setChar, deleteChar, setWord} = useContext(Context);
  const getKey = () => {
    if (InputValue === "ENTER"){
    setWord();
    }
   else if(InputValue === "DELETE"){
   deleteChar();
   }
   else
   {
   setChar(InputValue);
   }
  };
  return <div className="Inputkey" id ={specialInput > "special"; removed && "removed"} onClick=(getKey)> {InputValue} </div> ;
}

export default InputKey;
