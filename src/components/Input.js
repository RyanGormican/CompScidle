import React, { useEffect } from "react";
import InputKey from "./InputKey";
function Input(){
   const topkeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middlekeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomkeys = ["Z", "X", "C", "V", "B", "N", "M"];
   
   
   useEffect(() => {
      document.addEventListener("keydown",grabInput)
      return ( ) => { 
         document.removeEventListener("keydown",grabInput)
      };
   }, [grabInput]);
  return ( <div className="input" onKeyDown ={grabInput}>
    <div className="inputline1">{topkeys.map((inputkey) => {
       return <InputKey InputValue={inputkey} />;
    })}
   </div>
  <div className="inputline2">{middlekeys.map((inputkey) => {
       return <InputKey InputValue={inputkey} />;
    })}
     </div>
  <div className="inputline3">
    <InputKey InputValue ={"ENTER"} specialInput />
     {bottomkeys.map((inputkey) => {
       return <InputKey InputValue={inputkey} />;
    })}
        <InputKey InputValue ={"DELETE"} specialInput />
     </div>
    
    
    </div>

);
}
export default Input;
